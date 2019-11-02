---
title: "codility_MissingInteger"
excerpt: "codility_MissingInteger"

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

# In[53]:


def solution(A):
    Miss=[0 for _ in range(len(A)*3)]

    i=0
    while(len(A)>i):
        if A[i]>0 and len(Miss)>A[i]:
            Miss[A[i]]=1
        i+=1
       
        print(Miss)
    
    i=1
    while(len(Miss)>=i):
        if Miss[i]!=1:
            return i
        i+=1


# In[43]:


solution([1, 3, 6, 4, 1, 2])


# In[49]:


solution([1, 2, 3])


# In[51]:


solution([-1, -3])


# In[54]:


solution([1])



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
