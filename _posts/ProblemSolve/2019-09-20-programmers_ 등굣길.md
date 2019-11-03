---
title: "programmers_등굣길"
excerpt: "programmers_등굣길"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(m, n, puddles):
    matrix = [[0]*(m+1) for i in  range(n+1)]
    for i in range(len(puddles)):
        matrix[puddles[i][1]][puddles[i][0]] = -1

    for i in range(1,n+1):
        for j in range(1,m+1):
            if i ==1 and j == 1:
                matrix[i][j] = 1
                continue
            if matrix[i][j] == -1:
                matrix[i][j] = 0
                continue
            matrix[i][j] = (matrix[i-1][j] + matrix[i][j-1])

    return matrix[n][m]%1000000007

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
