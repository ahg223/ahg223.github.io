---
title: "programmers_카드 게임"
excerpt: "programmers_카드 게임"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(left, right):
    Answer=[[0 for i in range(len(left)+1)] for j in range(len(right)+1)]

    for i in range(1,len(left)+1):
        for j in range(1,len(right)+1):
            if left[i-1] > right[j-1]: Answer[i][j] = max(Answer[i-1][j-1], Answer[i-1][j], Answer[i][j-1]+right[j-1])
            else: Answer[i][j] = max(Answer[i - 1][j - 1], Answer[i - 1][j]) 
                
    return Answer[len(left)][len(right)]


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
