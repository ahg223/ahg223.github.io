---
title: "codility_MinAvgTwoSlice-Answer"
excerpt: "codility_MinAvgTwoSlice-Answer"

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

# In[1]:


def solution(A):
    Min=10000
    MinAvg=0
    
    j=0
    i=0
    while len(A)-3>i:
        MinAvg=(A[i]+A[i+1])/2
        if Min>MinAvg:
            Min=MinAvg
            j=i
        MinAvg=(A[i]+A[i+1]+A[i+2])/3
        if Min>MinAvg:
            Min=MinAvg
            j=i
        i+=1
        
    if len(A)>2:
        MinAvg=(A[len(A)-1]+A[len(A)-2]+A[len(A)-3])/3
        if Min>MinAvg:
            Min=MinAvg
            j=len(A)-3
        
    MinAvg=(A[len(A)-1]+A[len(A)-2])/2
    if Min>MinAvg:
        Min=MinAvg
        j=len(A)-2
        
    return j



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
