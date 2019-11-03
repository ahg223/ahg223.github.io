---
title: "programmers_기능개발"
excerpt: "programmers_기능개발"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(progresses, speeds):
    answer = []

    while progresses != []:
        Up=1
        First=progresses.pop(0)
        Due=(100-First)//speeds.pop(0) +1
        while progresses!=[]:
            if progresses[0]+Due*speeds[0]>100:
                Up+=1
                progresses.pop(0)
                speeds.pop(0)
            else: break
        answer.append(Up)
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
