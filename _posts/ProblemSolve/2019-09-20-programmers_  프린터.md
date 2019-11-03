---
title: "programmers_프린터"
excerpt: "programmers_프린터"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(priorities, location):
    answer = 0
    while True:
        flag=True
        order1=priorities.pop(0)
        for order2 in priorities:
            if order1<order2:
                flag=False
                break
        
        if flag==True:
            answer+=1
            if location==0: break
            location-=1
        elif flag==False:
            if location==0: location+=len(priorities)+1
            location-=1
            priorities.append(order1)
#        print(priorities,location)
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
