---
title: "programmers_순위"
excerpt: "programmers_순위"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(n, results):
    answer = 0
    matrix =  [ [ 0 for _ in range(n+1) ] for _ in range(n+1) ]
    for (win, lose) in results: matrix[win][lose],matrix[lose][win] = win,win

    for _ in range(2):
        for win in range(1,n+1):
            for lose in range(1,n+1):
                if win == matrix[win][lose]:
                    for i, j in enumerate(matrix[lose]):
                        if j == lose: matrix[win][i],matrix[i][win] = win,win

    for i in range(1, n+1):
        if matrix[i].count(0)-1 == 1: answer += 1

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
