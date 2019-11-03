---
title: "programmers_체육복"
excerpt: "programmers_체육복"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(n, lost, reserve):
    cross=[x for x in lost if x in reserve]
    reserve=list(set(reserve)-set(cross))
    lost=list(set(lost)-set(cross))
    answer = n-len(lost)
    count = 0
    for i in range(len(reserve)):
        for j in range(len(lost)):
            if abs(reserve[i]-lost[j])==1:
                lost[j]=-1
                count+=1
                break
    return answer+count

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
