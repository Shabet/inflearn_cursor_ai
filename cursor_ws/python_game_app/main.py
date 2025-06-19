#!/usr/bin/env python3
"""
테트리스 게임 메인 실행 파일
작성자: AI Assistant
목적: 파이썬 입문자를 위한 테트리스 게임 실습 프로젝트

실행 방법:
1. pygame 설치: pip install pygame
2. 실행: python main.py

게임 조작법:
- 방향키: 블록 이동 (←, →, ↓)
- 위쪽 방향키 (↑): 블록 회전
- 스페이스바: 빠른 하강
- P키: 일시정지
- R, Enter, 스페이스키: 게임오버 후 재시작

점수 규칙:
- 1줄 삭제: 100점 × 레벨
- 2줄 동시 삭제: 300점 × 레벨
- 3줄 동시 삭제: 500점 × 레벨
- 4줄 동시 삭제: 800점 × 레벨
- 10줄 삭제마다 레벨업 (속도 증가)
"""

import sys
import os

# 모듈 import 에러 처리
try:
    import pygame
    print("pygame 모듈이 성공적으로 로드되었습니다.")
except ImportError:
    print("Error: pygame 모듈이 설치되지 않았습니다.")
    print("다음 명령어로 설치해 주세요: pip install pygame")
    sys.exit(1)

try:
    from game import Game
    print("게임 모듈들이 성공적으로 로드되었습니다.")
except ImportError as e:
    print(f"Error: 게임 모듈 로드 실패 - {e}")
    print("모든 파일이 같은 디렉토리에 있는지 확인해 주세요.")
    sys.exit(1)

def print_instructions():
    """게임 조작법 출력"""
    print("\n" + "="*50)
    print("🎮 파이썬 테트리스 게임")
    print("="*50)
    print("📋 조작법:")
    print("  ← → : 블록 좌우 이동")
    print("  ↓   : 블록 빠른 하강")
    print("  ↑   : 블록 회전")
    print("  스페이스 : 즉시 하강")
    print("  P   : 일시정지")
    print("  R / Enter / Space : 게임오버 후 재시작")
    print("\n🏆 점수 규칙:")
    print("  1줄 삭제: 100점 × 레벨")
    print("  2줄 삭제: 300점 × 레벨")
    print("  3줄 삭제: 500점 × 레벨")
    print("  4줄 삭제: 800점 × 레벨")
    print("  10줄마다 레벨업!")
    print("="*50)
    print("게임을 시작합니다...\n")

def main():
    """메인 함수"""
    # 조작법 출력
    print_instructions()
    
    try:
        # 게임 인스턴스 생성 및 실행
        game = Game()
        game.run()
        
    except KeyboardInterrupt:
        print("\n게임이 사용자에 의해 중단되었습니다.")
    except Exception as e:
        print(f"\n게임 실행 중 오류가 발생했습니다: {e}")
        print("게임을 재시작해 보세요.")
    finally:
        print("게임을 종료합니다. 플레이해 주셔서 감사합니다!")
        # pygame 정리
        try:
            pygame.quit()
        except:
            pass

if __name__ == "__main__":
    main() 