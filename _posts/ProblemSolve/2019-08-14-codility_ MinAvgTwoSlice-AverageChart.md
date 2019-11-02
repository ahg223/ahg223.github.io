---
title: "codility_MinAvgTwoSlice-AverageChart"
excerpt: "codility_MinAvgTwoSlice-AverageChart"

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

# In[31]:


def solution(A):
    LeftArr=[A[0] for _ in range(len(A))]
    RightArr=[A[len(A)-1] for _ in range(len(A))]
    
    LTop=A[0]
    L=0
    i=0
    while len(A)-1>i:
        LeftArr[i+1] = (LeftArr[i]*(i+1) + A[i+1]) / (i+2)
        if LeftArr[i+1]>LTop:
            LTop=LeftArr[i+1]
            L=i
        i+=1
    print (LeftArr, LTop)
    print(L)
    
    RTop=A[len(A)-1]
    R=0    
    i=0
    while len(A)-1>i:
        RightArr[i+1] = (RightArr[i]*(i+1) + A[len(A)-i-2]) / (i+2)
        if RightArr[i+1]>RTop:
            RTop=RightArr[i+1]
            R=i
        i+=1
    print (RightArr, RTop, R)

    if RTop>LTop:
        LTop=0
        L=0
        i=0
        while (len(A)-R)>i:
            if LeftArr[i]>LTop:
                LTop=LeftArr[i]
                L=i
            i+=1
        
    return L+1


# In[32]:


solution([4,2,2,5,1,5,8])



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
