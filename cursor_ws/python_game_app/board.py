import settings

class Board:
    """테트리스 게임 보드 클래스"""
    
    def __init__(self):
        """보드 초기화 - 10x20 그리드"""
        self.grid = [[None for _ in range(settings.BOARD_WIDTH)] 
                    for _ in range(settings.BOARD_HEIGHT)]
        
    def is_valid_position(self, block, dx=0, dy=0, rotation=None):
        """
        블록이 해당 위치에서 유효한지 확인
        block: Block 객체
        dx, dy: 위치 오프셋
        rotation: 회전 상태
        """
        cells = block.get_cells(dx, dy, rotation)
        
        for x, y in cells:
            # 보드 경계 체크
            if x < 0 or x >= settings.BOARD_WIDTH or y >= settings.BOARD_HEIGHT:
                return False
            
            # 다른 블록과의 충돌 체크 (y < 0인 경우는 게임 시작시이므로 허용)
            if y >= 0 and self.grid[y][x] is not None:
                return False
                
        return True
    
    def place_block(self, block):
        """블록을 보드에 고정"""
        cells = block.get_cells()
        
        for x, y in cells:
            if 0 <= y < settings.BOARD_HEIGHT and 0 <= x < settings.BOARD_WIDTH:
                self.grid[y][x] = block.color
    
    def clear_lines(self):
        """완성된 라인을 삭제하고 삭제된 라인 수 반환"""
        lines_cleared = 0
        y = settings.BOARD_HEIGHT - 1
        
        while y >= 0:
            # 라인이 완성되었는지 확인
            if all(self.grid[y][x] is not None for x in range(settings.BOARD_WIDTH)):
                # 라인 삭제
                del self.grid[y]
                # 맨 위에 빈 라인 추가
                self.grid.insert(0, [None for _ in range(settings.BOARD_WIDTH)])
                lines_cleared += 1
            else:
                y -= 1
                
        return lines_cleared
    
    def is_game_over(self, block):
        """게임 오버 상태 확인"""
        # 새 블록이 생성 위치에서 바로 충돌하면 게임 오버
        return not self.is_valid_position(block)
    
    def get_cell_color(self, x, y):
        """특정 셀의 색상 반환"""
        if 0 <= y < settings.BOARD_HEIGHT and 0 <= x < settings.BOARD_WIDTH:
            return self.grid[y][x]
        return None
    
    def clear_board(self):
        """보드 초기화"""
        self.grid = [[None for _ in range(settings.BOARD_WIDTH)] 
                    for _ in range(settings.BOARD_HEIGHT)] 