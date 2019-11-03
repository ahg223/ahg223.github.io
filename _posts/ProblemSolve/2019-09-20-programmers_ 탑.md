---
title: "programmers_탑"
excerpt: "programmers_탑"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(heights):
answer = []
for i in range(len(heights)-1,-1,-1):
    for j in range(i,-1,-1):
        if heights[i]<heights[j]:
            answer.insert(0,j+1)
            break
    if len(answer) != len(heights)-i: answer.insert(0,0)
return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
