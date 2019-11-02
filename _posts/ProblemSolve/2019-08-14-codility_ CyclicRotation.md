---
title: "codility_CyclicRotation"
excerpt: "codility_CyclicRotation"

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

# In[5]:


def solution(A,K):
    while(K>0):
        I=A.pop()
        A.insert(0,I)
        K-=1
        print(A)


# In[7]:


solution([1,2,3,4,5],3)


# In[10]:


solution([3, 8, 9, 7, 6], 3)



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
