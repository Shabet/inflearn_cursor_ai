import random
import settings

class Block:
    """테트로미노 블록 클래스"""
    
    def __init__(self, x=0, y=0, shape=None):
        """
        블록 초기화
        x, y: 보드상의 위치
        shape: 블록 종류 ('I', 'O', 'T', 'S', 'Z', 'J', 'L')
        """
        self.x = x
        self.y = y
        self.shape = shape if shape else random.choice(list(settings.TETROMINO_SHAPES.keys()))
        self.rotation = 0
        self.color = settings.TETROMINO_COLORS[self.shape]
        
    def get_rotated_shape(self, rotation=None):
        """
        회전된 블록 모양 반환
        rotation: 회전 상태 (0, 1, 2, 3)
        """
        if rotation is None:
            rotation = self.rotation
        
        shapes = settings.TETROMINO_SHAPES[self.shape]
        return shapes[rotation % len(shapes)]
    
    def get_cells(self, dx=0, dy=0, rotation=None):
        """
        블록이 차지하는 셀들의 좌표 리스트 반환
        dx, dy: 위치 오프셋
        rotation: 회전 상태
        """
        cells = []
        shape = self.get_rotated_shape(rotation)
        
        for row_idx, row in enumerate(shape):
            for col_idx, cell in enumerate(row):
                if cell == '#':
                    cells.append((
                        self.x + col_idx + dx,
                        self.y + row_idx + dy
                    ))
        return cells
    
    def move(self, dx, dy):
        """블록 이동"""
        self.x += dx
        self.y += dy
    
    def rotate(self):
        """블록 회전"""
        self.rotation = (self.rotation + 1) % len(settings.TETROMINO_SHAPES[self.shape])
    
    def reset_position(self):
        """블록을 게임 보드 상단 중앙으로 재설정"""
        self.x = settings.BOARD_WIDTH // 2 - 2
        self.y = 0
        self.rotation = 0
    
    @staticmethod
    def get_random_shape():
        """랜덤한 블록 모양 반환"""
        return random.choice(list(settings.TETROMINO_SHAPES.keys())) 