---
title: "codility_MinAvgTwoSlice-NNN"
excerpt: "codility_MinAvgTwoSlice-NNN"

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

# In[22]:


def solution(A):
    Avg=[0 for _ in range((len(A)-1)*len(A)//2)]
    Top=[1000000,0]
    N=0
    
    i=0
    while len(A)-1>i:
        j=0
        while len(A)-i>j:
            if j==0:
                Avg[N]=(A[i]+A[i+1])/2
                j+=1
            else:
                Avg[N]=(Avg[N-1]*j + A[j+i]) / (j+1)
            
            if Avg[N]<Top[0]:
                Top[0]=Avg[N]
                Top[1]=i
            j+=1
            N+=1
        i+=1
        
    
        
    return Top[1]


# In[23]:


solution([4,2,2,5,1,5,8])



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
