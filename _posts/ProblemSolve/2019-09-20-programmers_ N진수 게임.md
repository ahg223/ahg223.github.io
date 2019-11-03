---
title: "programmers_N진수 게임"
excerpt: "programmers_N진수 게임"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def pre(n,temp):
    Num=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    Answer=""
    while temp!=-1:
        Answer=Num[temp%n]+Answer
        temp=temp//n
        if temp==0: temp=-1
    return Answer

def solution(n, t, m, p):
    answer = ''
    Data=''
    temp=0
    while t*m>len(Data):
        Data+=pre(n,temp)
        temp+=1
        
    temp=0
    while t!=len(answer):
        i=temp*m+p-1
        answer+=Data[i]
        temp+=1
    
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
