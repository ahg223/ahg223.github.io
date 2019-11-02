---
title: "codility_FrogJmp"
excerpt: "codility_FrogJmp"

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

# In[9]:


def solution(X, Y, D):
    result=(Y-X)//D
    if((Y-X)%D==0):
        return result
    print(result)
    return result+1


# In[11]:


solution(10,85,30)



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
