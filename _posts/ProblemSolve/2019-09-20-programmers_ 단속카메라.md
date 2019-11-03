---
title: "programmers_단속카메라"
excerpt: "programmers_단속카메라"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(routes):
    answer = 1
    routes.sort()
    temp=routes.pop(0)

    while routes!=[]:
        temp[0]=routes[0][0]
        if temp[1]>routes[0][1]: temp[1]=routes[0][1]        
        if temp[1]<routes[0][0]:
            temp[1]=routes[0][1]
            answer+=1
        routes.pop(0)
        
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
