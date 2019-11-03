---
title: "programmers_다트 게임"
excerpt: "programmers_다트 게임"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(dartResult):
    score=[]
    number=["0","1","2","3","4","5","6","7","8","9","10"]
    temp=""
    for i in range(len(dartResult)):
        if dartResult[i] in number: temp+=dartResult[i]
            
        if dartResult[i] == "S": 
            score.append(int(temp)**1)
            temp=""
        elif dartResult[i] == "D": 
            score.append(int(temp)**2)
            temp=""
        elif dartResult[i] == "T": 
            score.append(int(temp)**3)
            temp=""
        
        if dartResult[i] == "*" and len(score)==1: score[0]=score[0]*2
        elif dartResult[i] == "*": score[-1], score[-2]=score[-1]*2, score[-2]*2
            
        if dartResult[i] == "#": score[-1]= -score[-1]

    return sum(score)

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
