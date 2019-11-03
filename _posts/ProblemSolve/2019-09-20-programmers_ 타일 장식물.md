---
title: "programmers_타일 장식물"
excerpt: "programmers_타일 장식물"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(N):
    a=1
    b=1
    for i in range(N-2): a,b=b,a+b    
    return 4*b+2*a

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
