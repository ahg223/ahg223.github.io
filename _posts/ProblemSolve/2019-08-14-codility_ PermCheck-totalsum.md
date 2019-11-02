---
title: "codility_PermCheck-totalsum"
excerpt: "codility_PermCheck-totalsum"

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

# In[ ]:


def solution(A):
    N=len(A)
    Sum=N*(N+1)/2
    lenSum=sum(A)
    if(Sum==lenSum):
        return 1
    else:
        return 0



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
