---
title: "codility_MaxCounters_O"
excerpt: "codility_MaxCounters_O"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-08-14T16:40:00
---

```python

#!/usr/bin/env python
# coding: utf-8

# In[ ]:


def solution(N, A):
    i=0
    Max=0
    Result=[0 for _ in range(N)]
    while(len(A)>i):
        if A[i] == N+1:
            Result=[Max for _ in range(N)]
        else:
            Result[A[i]-1]+=1
            
        if A[i] != N+1 and Result[A[i]-1]>Max:
            Max=Result[A[i]-1]
        i+=1
        
    return Result



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
