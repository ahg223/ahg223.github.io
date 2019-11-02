---
title: "codility_FrogRiverOne"
excerpt: "codility_FrogRiverOne"

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


def solution(X, A):
    River=[0 for _ in range(X)]
    i=0
    count=0
    
    while(len(A)>i):
        if River[A[i]-1] != 1:
            River[A[i]-1]=1
            count+=1
        if count == X:
            return i
        i+=1
        
    return -1


# In[14]:


solution(5, [1,2,3,4,4] )



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
