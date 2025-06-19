import pygame
import random
import settings
from block import Block
from board import Board
from score import Score

class Game:
    """테트리스 게임 메인 클래스"""
    
    def __init__(self):
        """게임 초기화"""
        pygame.init()
        self.screen = pygame.display.set_mode((settings.WINDOW_WIDTH, settings.WINDOW_HEIGHT))
        pygame.display.set_caption("Tetris")
        self.clock = pygame.time.Clock()
        
        # 게임 상태
        self.running = True
        self.paused = False
        self.game_over = False
        
        # 게임 객체들
        self.board = Board()
        self.score = Score()
        self.current_block = None
        self.next_block = Block()
        
        # 타이머
        self.last_fall_time = 0
        self.fast_fall = False
        
        # 폰트 초기화
        self.font = pygame.font.Font(None, 36)
        self.small_font = pygame.font.Font(None, 24)
        
        # 새 게임 시작
        self.new_game()
    
    def new_game(self):
        """새 게임 시작"""
        self.board.clear_board()
        self.score.reset()
        self.game_over = False
        self.paused = False
        
        # 현재 블록과 다음 블록 설정
        self.current_block = Block(settings.BOARD_WIDTH // 2 - 2, 0)
        self.next_block = Block()
        
        self.last_fall_time = pygame.time.get_ticks()
    
    def handle_events(self):
        """이벤트 처리"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.running = False
            
            elif event.type == pygame.KEYDOWN:
                if self.game_over:
                    # 여러 키로 재시작 가능하게 함
                    restart_keys = [pygame.K_r, pygame.K_RETURN, pygame.K_SPACE]
                    if event.key in restart_keys:
                        print("게임을 재시작합니다!")
                        self.new_game()
                    return
                
                if event.key == settings.KEY_PAUSE:
                    self.paused = not self.paused
                    return
                
                if self.paused:
                    return
                
                # 게임 중 키 입력 처리
                if event.key == settings.KEY_LEFT:
                    self.move_block(-1, 0)
                elif event.key == settings.KEY_RIGHT:
                    self.move_block(1, 0)
                elif event.key == settings.KEY_DOWN:
                    self.fast_fall = True
                elif event.key == settings.KEY_ROTATE:
                    self.rotate_block()
                elif event.key == settings.KEY_DROP:
                    self.hard_drop()
            
            elif event.type == pygame.KEYUP:
                if event.key == settings.KEY_DOWN:
                    self.fast_fall = False
    
    def move_block(self, dx, dy):
        """블록 이동"""
        if self.board.is_valid_position(self.current_block, dx, dy):
            self.current_block.move(dx, dy)
    
    def rotate_block(self):
        """블록 회전"""
        original_rotation = self.current_block.rotation
        self.current_block.rotate()
        
        # 회전 후 유효하지 않으면 원래대로 되돌림
        if not self.board.is_valid_position(self.current_block):
            self.current_block.rotation = original_rotation
    
    def hard_drop(self):
        """블록을 바닥까지 빠르게 떨어뜨림"""
        while self.board.is_valid_position(self.current_block, 0, 1):
            self.current_block.move(0, 1)
        self.place_current_block()
    
    def place_current_block(self):
        """현재 블록을 보드에 고정"""
        self.board.place_block(self.current_block)
        
        # 라인 삭제 체크
        lines_cleared = self.board.clear_lines()
        self.score.add_lines(lines_cleared)
        
        # 새 블록 생성
        self.current_block = self.next_block
        self.current_block.reset_position()
        self.next_block = Block()
        
        # 게임 오버 체크
        if self.board.is_game_over(self.current_block):
            self.game_over = True
    
    def update(self):
        """게임 상태 업데이트"""
        if self.game_over or self.paused:
            return
        
        current_time = pygame.time.get_ticks()
        fall_time = settings.FAST_FALL_TIME if self.fast_fall else self.score.get_fall_time()
        
        # 블록 자동 하강
        if current_time - self.last_fall_time > fall_time:
            if self.board.is_valid_position(self.current_block, 0, 1):
                self.current_block.move(0, 1)
            else:
                self.place_current_block()
            
            self.last_fall_time = current_time
    
    def draw_block(self, block, offset_x=0, offset_y=0):
        """블록 그리기"""
        cells = block.get_cells()
        for x, y in cells:
            screen_x = (x + offset_x) * settings.BLOCK_SIZE
            screen_y = (y + offset_y) * settings.BLOCK_SIZE
            
            if 0 <= y < settings.BOARD_HEIGHT:  # 화면에 보이는 부분만 그리기
                pygame.draw.rect(self.screen, block.color,
                               (screen_x, screen_y, settings.BLOCK_SIZE, settings.BLOCK_SIZE))
                pygame.draw.rect(self.screen, settings.WHITE,
                               (screen_x, screen_y, settings.BLOCK_SIZE, settings.BLOCK_SIZE), 1)
    
    def draw_board(self):
        """게임 보드 그리기"""
        # 보드 배경
        board_rect = pygame.Rect(0, 0, 
                               settings.BOARD_WIDTH * settings.BLOCK_SIZE,
                               settings.BOARD_HEIGHT * settings.BLOCK_SIZE)
        pygame.draw.rect(self.screen, settings.BLACK, board_rect)
        pygame.draw.rect(self.screen, settings.WHITE, board_rect, 2)
        
        # 고정된 블록들 그리기
        for y in range(settings.BOARD_HEIGHT):
            for x in range(settings.BOARD_WIDTH):
                color = self.board.get_cell_color(x, y)
                if color:
                    screen_x = x * settings.BLOCK_SIZE
                    screen_y = y * settings.BLOCK_SIZE
                    pygame.draw.rect(self.screen, color,
                                   (screen_x, screen_y, settings.BLOCK_SIZE, settings.BLOCK_SIZE))
                    pygame.draw.rect(self.screen, settings.WHITE,
                                   (screen_x, screen_y, settings.BLOCK_SIZE, settings.BLOCK_SIZE), 1)
        
        # 현재 블록 그리기
        if self.current_block:
            self.draw_block(self.current_block)
    
    def draw_ui(self):
        """UI 그리기 (점수, 레벨, 다음 블록 등)"""
        ui_x = settings.BOARD_WIDTH * settings.BLOCK_SIZE + 10
        
        # 점수 정보
        score_data = self.score.get_score_display()
        y_offset = 20
        
        texts = [
            f"Score: {score_data['score']}",
            f"Level: {score_data['level']}",
            f"Lines: {score_data['lines']}",
            f"High Score: {score_data['high_score']}"
        ]
        
        for text in texts:
            surface = self.small_font.render(text, True, settings.WHITE)
            self.screen.blit(surface, (ui_x, y_offset))
            y_offset += 30
        
        # 다음 블록 미리보기
        y_offset += 20
        next_text = self.small_font.render("Next:", True, settings.WHITE)
        self.screen.blit(next_text, (ui_x, y_offset))
        
        # 다음 블록을 작은 크기로 그리기
        if self.next_block:
            preview_x = ui_x // settings.BLOCK_SIZE
            preview_y = (y_offset + 30) // settings.BLOCK_SIZE
            
            # 미니 블록 그리기 (크기 축소)
            cells = self.next_block.get_cells()
            for x, y in cells:
                if y >= 0:  # 보이는 부분만
                    mini_size = settings.BLOCK_SIZE // 2
                    screen_x = ui_x + x * mini_size
                    screen_y = y_offset + 30 + y * mini_size
                    pygame.draw.rect(self.screen, self.next_block.color,
                                   (screen_x, screen_y, mini_size, mini_size))
                    pygame.draw.rect(self.screen, settings.WHITE,
                                   (screen_x, screen_y, mini_size, mini_size), 1)
    
    def draw_game_over(self):
        """게임 오버 화면 그리기"""
        overlay = pygame.Surface((settings.WINDOW_WIDTH, settings.WINDOW_HEIGHT))
        overlay.set_alpha(128)
        overlay.fill(settings.BLACK)
        self.screen.blit(overlay, (0, 0))
        
        # 게임 오버 텍스트
        game_over_text = self.font.render("GAME OVER", True, settings.WHITE)
        score_text = self.small_font.render(f"Final Score: {self.score.score}", True, settings.WHITE)
        restart_text = self.small_font.render("Press R, Enter, or Space to restart", True, settings.WHITE)
        
        # 텍스트 중앙 정렬
        game_over_rect = game_over_text.get_rect(center=(settings.WINDOW_WIDTH//2, settings.WINDOW_HEIGHT//2 - 50))
        score_rect = score_text.get_rect(center=(settings.WINDOW_WIDTH//2, settings.WINDOW_HEIGHT//2))
        restart_rect = restart_text.get_rect(center=(settings.WINDOW_WIDTH//2, settings.WINDOW_HEIGHT//2 + 50))
        
        self.screen.blit(game_over_text, game_over_rect)
        self.screen.blit(score_text, score_rect)
        self.screen.blit(restart_text, restart_rect)
    
    def draw_pause(self):
        """일시정지 화면 그리기"""
        overlay = pygame.Surface((settings.WINDOW_WIDTH, settings.WINDOW_HEIGHT))
        overlay.set_alpha(128)
        overlay.fill(settings.BLACK)
        self.screen.blit(overlay, (0, 0))
        
        pause_text = self.font.render("PAUSED", True, settings.WHITE)
        continue_text = self.small_font.render("Press P to continue", True, settings.WHITE)
        
        pause_rect = pause_text.get_rect(center=(settings.WINDOW_WIDTH//2, settings.WINDOW_HEIGHT//2 - 25))
        continue_rect = continue_text.get_rect(center=(settings.WINDOW_WIDTH//2, settings.WINDOW_HEIGHT//2 + 25))
        
        self.screen.blit(pause_text, pause_rect)
        self.screen.blit(continue_text, continue_rect)
    
    def draw(self):
        """화면 그리기"""
        self.screen.fill(settings.GRAY)
        
        # 게임 보드 그리기
        self.draw_board()
        
        # UI 그리기
        self.draw_ui()
        
        # 게임 상태에 따른 오버레이
        if self.game_over:
            self.draw_game_over()
        elif self.paused:
            self.draw_pause()
        
        pygame.display.flip()
    
    def run(self):
        """게임 메인 루프"""
        while self.running:
            self.handle_events()
            self.update()
            self.draw()
            self.clock.tick(settings.FPS)
        
        pygame.quit() 