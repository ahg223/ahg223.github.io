---
title: "codility_num2"
excerpt: "codility_num2"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-08-14T16:40:00
---

```python


C, F, X = map(float, input().split())
time = 0
work_now = 2

while True:
    work_next = work_now + F

    case1_time = time + X/work_now
    case2_time = time + C/work_now + X/work_next

    if case1_time > case2_time: 
        time += C/work_now
        work_now = work_next
    else: 
        time = case1_time
        break

print(time)


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
