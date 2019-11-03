---
title: "programmers_무지의 먹방 라이브"
excerpt: "programmers_무지의 먹방 라이브"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(food_times, k):
    if sum(food_times) <= k : return -1

    Food = sorted(food_times)

    i=0
    k -= Food[i] * (len(Food) - i)
    while k > 0 :
        i += 1
        k -= (Food[i] - Food[i-1]) * (len(Food) - i)

    temp= Food[i]
    while k < 0:
        temp -= 1
        k += len(Food) - i

    answer = 0
    for i, val in enumerate(food_times):
        if val > temp :
            if k <= 0 : return i + 1
            else : k -= 1

    return answer


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
