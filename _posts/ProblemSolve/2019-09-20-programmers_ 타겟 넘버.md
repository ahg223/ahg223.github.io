---
title: "programmers_타겟 넘버"
excerpt: "programmers_타겟 넘버"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

answer=0
temp=0

def iter(numbers, target,i):
    global answer
    global temp
    if len(numbers)==i:
        if target==temp: answer+=1
        return
    
    temp+=numbers[i]
    iter(numbers,target,i+1)
    temp-=(numbers[i]*2)
    iter(numbers,target,i+1)
    temp+=numbers[i]
    


def solution(numbers, target):
    iter(numbers,target,0)
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
