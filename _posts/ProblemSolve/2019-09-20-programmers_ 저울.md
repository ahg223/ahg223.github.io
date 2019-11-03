---
title: "programmers_저울"
excerpt: "programmers_저울"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(weight):
    answer = 0
    weight.sort()

    while weight!=[]:
        answer+=weight.pop(0)
        if weight==[]: break
        if answer<weight[0]-1: break

    return answer+1

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
