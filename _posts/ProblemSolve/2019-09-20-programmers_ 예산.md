---
title: "programmers_예산"
excerpt: "programmers_예산"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(budgets, M):
    answer = 0
    budgets.sort()

    for i in range(len(budgets)):
        if budgets[i]>=M//(len(budgets)-i):
            answer=M//(len(budgets)-i)
            break
        M-=budgets[i]
    if answer==0: return budgets[-1]
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
