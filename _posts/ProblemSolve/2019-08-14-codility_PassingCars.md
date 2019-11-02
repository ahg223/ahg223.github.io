---
title: "codility_PassingCars"
excerpt: "codility_PassingCars"

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

# In[11]:


def solution(A):
    Result=0
    Num=0
    i=0
    j=len(A)-1
    while(j>0):
        j=len(A)-i-1
        if A[j] == 0:
            Result+=Num
        else:
            Num+=1
        i+=1
        
        if Result>1000000000:
            return -1
        
    return Result


# In[12]:


solution([0, 1, 0, 1, 1] )



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
