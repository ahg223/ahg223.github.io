---
title: "codility_PermCheck"
excerpt: "codility_PermCheck"

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
    A.sort()
    i=0
    while(len(A)>i):
        if(A[i]!=i+1):
            return 0
        i+=1

    return 1


# In[ ]:


solution([4,1,3,2])
solution([4,1,3])


# In[ ]:






```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
