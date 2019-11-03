---
title: "programmers_블록게임"
excerpt: "programmers_블록게임"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def Possible(board, x, y):
    for i in range(x):
        if board[i][y] != 0: return False
    return True

def Tile(board, x, y):
    Num=board[x][y]
    try:
        if board[x+1][y] == Num and board[x+2][y] == Num and board[x+2][y+1] == Num:
            if Possible(board, x+2, y+1) and Possible(board, x+2, y):
                board[x][y] = board[x+1][y] = board[x+2][y] = board[x+2][y+1] = 0
                return True
    except IndexError: pass
    
    try:
        if board[x+1][y] == Num and board[x+2][y] == Num and board[x+2][y-1] == Num:
            if Possible(board, x+2, y-1):
                board[x][y] = board[x+1][y] = board[x+2][y] = board[x+2][y-1] = 0
                return True
    except IndexError: pass
    
    try:
        if board[x+1][y] == Num and board[x+1][y+1] == Num and board[x+1][y+2] == Num:
            if Possible(board, x+1, y+1) and Possible(board, x+1, y+2):
                board[x][y] = board[x+1][y] = board[x+1][y+1] = board[x+1][y+2] = 0
                return True
    except IndexError: pass
    
    try:
        if board[x+1][y] == Num and board[x+1][y+1] == Num and board[x+1][y-1] == Num:
            if Possible(board, x+1, y+1) and Possible(board, x+1, y-1):
                board[x][y] = board[x+1][y] = board[x+1][y+1] = board[x+1][y-1] = 0
                return True
    except IndexError: pass
    
    try:
        if board[x+1][y] == Num and board[x+1][y-1] == Num and board[x+1][y-2] == Num:
            if Possible(board, x+1, y-1) and Possible(board, x+1, y-2):
                board[x][y] = board[x+1][y] = board[x+1][y-1] = board[x+1][y-2] = 0
                return True 
    except IndexError: pass
    
    return False

def solution(board):
    answer = 0
    
    while True:
        check = True
        for i in range(len(board)):
            for j in range(len(board)):
                if board[i][j] != 0:
                    if Tile(board,i,j):
                        answer+=1
                        check = False
        if check: break

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
