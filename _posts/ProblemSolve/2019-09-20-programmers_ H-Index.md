---
title: "programmers_H-Index"
excerpt: "programmers_H-Index"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(citations):
    citations.sort(reverse=True)
    print(citations)
    for i in range(len(citations)):
        if citations[i]>=i+1 and len(citations)==i+1: return i+1
        #elif citations[i]>=i+1 and citations[i+1]<i+1 and i+1>=len(citations)-i-1: return i+1
        elif citations[i]>=i+1 and citations[i+1]<=i+1: return i+1

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
