import settings

class Score:
    """점수 및 레벨 관리 클래스"""
    
    def __init__(self):
        """점수 시스템 초기화"""
        self.score = 0
        self.level = 1
        self.lines_cleared = 0
        self.high_score = self.load_high_score()
    
    def add_lines(self, lines):
        """
        라인 삭제에 따른 점수 계산
        lines: 삭제된 라인 수
        """
        if lines == 0:
            return
        
        # 라인 수에 따른 점수 계산
        line_scores = {
            1: settings.SCORE_1_LINE,
            2: settings.SCORE_2_LINE,
            3: settings.SCORE_3_LINE,
            4: settings.SCORE_4_LINE
        }
        
        # 레벨에 따른 보너스 점수
        base_score = line_scores.get(lines, settings.SCORE_4_LINE)
        self.score += base_score * self.level
        
        # 삭제된 라인 수 업데이트
        self.lines_cleared += lines
        
        # 레벨업 체크
        self.check_level_up()
        
        # 최고점수 업데이트
        if self.score > self.high_score:
            self.high_score = self.score
            self.save_high_score()
    
    def check_level_up(self):
        """레벨업 조건 확인"""
        new_level = (self.lines_cleared // settings.LINES_PER_LEVEL) + 1
        if new_level > self.level:
            self.level = new_level
    
    def get_fall_time(self):
        """현재 레벨에 따른 블록 낙하 시간 계산"""
        # 레벨이 높을수록 빠르게 떨어짐
        fall_time = max(settings.FALL_TIME - (self.level - 1) * 50, 100)
        return fall_time
    
    def reset(self):
        """점수 초기화"""
        self.score = 0
        self.level = 1
        self.lines_cleared = 0
    
    def load_high_score(self):
        """최고점수 로드"""
        try:
            with open('high_score.txt', 'r') as f:
                return int(f.read().strip())
        except (FileNotFoundError, ValueError):
            return 0
    
    def save_high_score(self):
        """최고점수 저장"""
        try:
            with open('high_score.txt', 'w') as f:
                f.write(str(self.high_score))
        except:
            pass  # 저장 실패시 무시
    
    def get_score_display(self):
        """점수 표시용 문자열 반환"""
        return {
            'score': self.score,
            'level': self.level,
            'lines': self.lines_cleared,
            'high_score': self.high_score
        } 