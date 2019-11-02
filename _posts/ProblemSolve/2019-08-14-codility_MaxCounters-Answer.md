---
title: "codility_MaxCounters-Answer"
excerpt: "codility_MaxCounters-Answer"

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

# In[7]:


def solution(N, A):
    Result=[0 for _ in range(N)]
    i=0
    counter=0
    
    while(len(A)>i):
        if A[i]!=N+1 and Result[A[i-1 ]]>counter:
            counter=Result[A[i-1]]
            Result[A[i]-1]+=1
        elif A[i]!=N+1:
            Result[A[i]-1]+=1
        else:
            Result=[counter for _ in range(N)]
        i+=1
        print(Result)
        
    return Result


# In[8]:


solution(5, [3, 4, 4, 6, 1, 4, 4])



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
