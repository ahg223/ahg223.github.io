---
title: "programmers_여행경로"
excerpt: "programmers_여행경로"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

answer=[]

def iter(tickets):
    for i in range(len(tickets)):
        if tickets[i][0]==answer[-1]:
            temp=tickets.pop(i)
            answer.append(temp[1])
            iter(tickets)
            if len(tickets)==0: return
            tickets.insert(i,temp)
            answer.pop(-1)

def solution(tickets):
    tickets.sort()
    for i in range(len(tickets)):
        if tickets[i][0]=="ICN":
            temp=tickets.pop(i)
            answer.append(temp[0])
            answer.append(temp[1])
            iter(tickets)
            if len(tickets)==0: break
            answer.pop()
            answer.pop()
            tickets.insert(i,temp)
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
