---
title: "programmers_K번째수"
excerpt: "programmers_K번째수"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(array, commands):
    answer = []

    for command in commands:
        temp=array[command[0]-1:command[1]]
        temp.sort()
        answer.append(temp[command[2]-1])
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
