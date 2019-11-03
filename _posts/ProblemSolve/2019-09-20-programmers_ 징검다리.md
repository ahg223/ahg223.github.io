---
title: "programmers_징검다리"
excerpt: "programmers_징검다리"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(distance, rocks, n):
    if len(rocks) == n:
        return distance

    rocks.sort()
    rocks.append(distance)
    Min = 0
    Max = rocks[-1]

    while Max > (Min + 1):
        Mid = (Max + Min) // 2
        prev = 0
        count = 0
        
        for rock in rocks:
            if rock - prev < Mid: count += 1
            else: prev = rock
        
        if count > n: Max = Mid
        else: Min = Mid
    answer = Min
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
