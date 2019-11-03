---
title: "programmers_실패율"
excerpt: "programmers_실패율"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(N, stages):
    answer = []
    _=[]
    total=[[0,0] for i in range(N+2)]
    player=len(stages)

    for i in stages: total[i][0]+=1
    total.pop()

    for i in range(1,N+1): 
        player-=total[i-1][0]
        total[i][1]=player
        
    for i,x in enumerate(total):
        if i==0: continue
        if x[1]!=0: _.append([i,x[0]/x[1]])
        else: _.append([i,0])
            
    _.sort(key=lambda x: x[1],reverse=True)
    for i,j in _: answer.append(i)

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
