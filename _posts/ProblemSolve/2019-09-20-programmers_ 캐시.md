---
title: "programmers_캐시"
excerpt: "programmers_캐시"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(cacheSize, cities):
    answer = 0
    cache=[]

    if cacheSize==0: return len(cities)*5

    while cities!=[]:
        temp=cities.pop(0)
        temp=temp.lower()
        if temp in cache: 
            answer+=1
            cache.append(cache.pop(cache.index(temp)))
        elif cacheSize==len(cache): 
            cache.pop(0)
            cache.append(temp)
            answer+=5
        else:
            cache.append(temp)
            answer+=5

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
