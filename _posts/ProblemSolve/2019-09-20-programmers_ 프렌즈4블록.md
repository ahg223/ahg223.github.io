---
title: "programmers_프렌즈4블록"
excerpt: "programmers_프렌즈4블록"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def Board(board):
    for i in range(len(board)):
        temp=board.pop(i)
        board.insert(i,list(temp))
    return board

def solution(m, n, board):
    answer = 0
    board=Board(board)
    
    while True:
        temp=[]
        for i in range(m-1):
            for j in range(n-1):
                List=[]
                List.append(board[i][j])
                List.append(board[i][j+1])
                List.append(board[i+1][j])
                List.append(board[i+1][j+1])
                if len(set(List))==1 and "0" not in List: temp.append([i,j])
        if len(temp)==0: break
        
        for i,j in temp:
            if board[i][j]!="0":
                board[i][j]="0"
                answer+=1
            if board[i+1][j]!="0":
                board[i+1][j]="0"
                answer+=1
            if board[i][j+1]!="0":
                board[i][j+1]="0"
                answer+=1
            if board[i+1][j+1]!="0":
                board[i+1][j+1]="0"
                answer+=1
        
        for j in range(n):
            for i in range(m):
                if board[i][j]=="0":
                    for _ in range(i,0,-1): board[_][j],board[_-1][j]=board[_-1][j],board[_][j]
    
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
