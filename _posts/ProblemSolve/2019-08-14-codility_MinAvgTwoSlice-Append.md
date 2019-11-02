---
title: "codility_MinAvgTwoSlice-Append"
excerpt: "codility_MinAvgTwoSlice-Append"

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

# In[21]:


def solution(A):
    
    Avg=[]
    i=0
    N=0
    Top=[10000000,0]
    while len(A)>i:
        j=0
        while len(A)-i>j:
            if j==0:
                j+=1
            else:
                Avg.append(((A[i+j-1]*j) + A[i+j]) / (j+1))
                N+=1
                j+=1
            print(Avg,N)
            if N!=0 and Avg[N-1]<Top[0]:
                Top[0]=Avg[N-1]
                Top[1]=N-1
        i+=1
        
    print(Avg)
    print(Top)
        
    Sum=len(A)*(len(A)+1)/2 - Top[1]
    
    i=0
    while 1:
        Sum-=i
        if 0>Sum:
            break
        i+=1
        
    return len(A)-i


# In[22]:


solution([4,2,2,5,1,5,8])




```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
