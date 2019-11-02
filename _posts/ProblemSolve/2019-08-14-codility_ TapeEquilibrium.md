---
title: "codility_TapeEquilibrium"
excerpt: "codility_TapeEquilibrium"

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

# In[25]:


def solution(A):
    length=len(A)
    Sum=sum(A,0)
    print(length,Sum)
    a=1
    val=0
    answer=10000
    while(length>a):
        val+=A[a]
        print(val)
        result=abs(Sum-val*2)
        if(answer>result):
            answer=result
        a+=1
        print(answer)
    return answer


# In[26]:


solution([-1000,1000])
solution([5,6,2,4,1])



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
