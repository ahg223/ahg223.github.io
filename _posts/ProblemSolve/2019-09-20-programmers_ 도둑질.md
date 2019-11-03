---
title: "programmers_도둑질"
excerpt: "programmers_도둑질"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(money):
    case1 = [0 for i in range(len(money))]
    case2 = [0 for i in range(len(money))]
    case1[0],case1[1]=money[0],money[0]
    case2[0],case2[1]=0,money[1]

    for i in range(2, len(money)-1):
        case1[i]=max(case1[i - 1], money[i] + case1[i - 2])
        case2[i]=max(case2[i - 1], money[i] + case2[i - 2])

    case2[-1]=max(case2[-2], money[-1] + case2[-3])
    return max(case1[-2], case2[-1])


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
