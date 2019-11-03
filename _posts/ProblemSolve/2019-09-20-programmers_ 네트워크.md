---
title: "programmers_네트워크"
excerpt: "programmers_네트워크"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

visited=[]
answer=0

def iter(computers,i):
    global answer
    global visited  
    
    visited.append(i)
    for j in range(len(computers)+1):
        if j==len(computers): break
        if j not in visited and computers[i][j]!=0: iter(computers,j)

def solution(n, computers):
    global answer
    global visited
    New=0
    while True:
        if len(visited)==len(computers): break
        iter(computers,New)
        answer+=1
        for New in range(len(computers)):
            if New not in visited: break
        
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
