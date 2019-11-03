---
title: "programmers_가장 큰 수"
excerpt: "programmers_가장 큰 수"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(numbers):
    numbers = list(map(str, numbers))
    length = max([len(x) for x in numbers])
    numbers.sort(key=lambda x: x*length, reverse=True)
    return str(int(''.join(numbers)))

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
