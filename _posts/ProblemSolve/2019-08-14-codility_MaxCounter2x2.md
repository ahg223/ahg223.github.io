---
title: "codility_MaxCounter2x2"
excerpt: "codility_MaxCounter2x2"

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

# In[108]:


def solution(N, A):
    col=0
    last=0
    Result=[[0 for _ in range(N+1)] for _ in range(len(A)+1)]

    i=0
    while(len(A)>i):
        if A[i] != N+1 and Result[col][A[i]-1]>Result[col][N]:
            Result[col][A[i]-1]+=1
            Result[col][N]=Result[col][A[i]-1]
            
        elif A[i] != N+1:
            Result[col][A[i]-1]+=1

        
        else:
            col+=1
            
        i+=1
            
    i=0        
    while(col>i):
        last+=Result[i][N]
        i+=1
    print(last)
    
    i=0
    while(N>i):
        Result[col][i]+=last
        i+=1
    
    print(Result)
    
    Final=Result[col][:N]
    
    
    return Final


# In[109]:


solution(5, [3, 4, 4, 6, 1, 4, 4])


# In[110]:


solution(1, [2, 1, 1, 2, 1])


# In[111]:


solution(5, [6, 6, 6, 6, 6, 6])



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
