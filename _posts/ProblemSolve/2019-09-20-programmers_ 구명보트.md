---
title: "programmers_구명보트"
excerpt: "programmers_구명보트"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(people, limit):
    people.sort()
    length=len(people)
    i=0
    heavy=length-1
    count=0
    while(i<heavy):
        if people[i]>limit//2: break
        elif people[heavy]<=limit//2:
            count += (heavy-i+1)//2
            break
        elif people[i]+people[heavy]<=limit:
            count+=1
            i+=1
            heavy-=1
        else: heavy-=1
    return length-count

def solution(people, limit):
    people.sort()
    length=len(people)
    i=0
    heavy=length-1
    count=0
    while(i<heavy):
        if people[i]+people[heavy]<=limit:
            count+=1
            i+=1
            heavy-=1
        else: heavy-=1
    return length-count

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
