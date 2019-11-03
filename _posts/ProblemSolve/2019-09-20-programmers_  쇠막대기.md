---
title: "programmers_쇠막대기"
excerpt: "programmers_쇠막대기"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(arrangement):
    answer = 0
    stack = 0

    if arrangement[0]=="(":
        stack+=1
    else:
        stack-=1
        
    for i in range(1,len(arrangement)):
        if arrangement[i]=="(":
            stack+=1
        else:
            stack-=1
            if arrangement[i-1]==")":
                answer+=1
            else:
                answer+=stack
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
