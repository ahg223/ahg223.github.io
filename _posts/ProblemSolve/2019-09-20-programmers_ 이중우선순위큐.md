---
title: "programmers_이중우선순위큐"
excerpt: "programmers_이중우선순위큐"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(operations):
    answer = []

    for i in range(len(operations)):
        if operations[i][0]=="I": 
            answer.append(int(operations[i][2:]))
            answer.sort()
        elif len(answer)>0 and int(operations[i][2:])==-1: answer.pop(0)
        elif len(answer)>0 and int(operations[i][2:])==1: answer.pop(-1)        

    if answer==[]: return[0,0]
    else: 
        temp=[]
        temp.append(answer.pop(-1))
        temp.append(answer.pop(0))
        return temp

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
