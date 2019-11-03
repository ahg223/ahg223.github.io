---
title: "programmers_섬 연결하기"
excerpt: "programmers_섬 연결하기"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

import sys

def solution(n, costs):
    answer = 0
    costs.sort(key=lambda i:i[2])
    memory=[costs[0][0],costs[0][1]]
    answer+=costs[0][2]
    costs.pop(0)
    costs.sort(key=lambda i:i[0])
    
    while len(memory)!=n:
        print(memory,answer,costs)
        temp=n+1
        Min=sys.maxsize
        for j in range(len(costs)):
            #if costs[j][0] > max(memory): break
            if costs[j][0] in memory and costs[j][1] not in memory and Min>costs[j][2]: 
                temp=j
                Min=costs[j][2]
            elif costs[j][0] not in memory and costs[j][1] in memory and Min>costs[j][2]: 
                temp=j
                Min=costs[j][2]
                    
        if costs[temp][1] not in memory: memory.append(costs[temp][1])
        else: memory.append(costs[temp][0])
        answer+=costs[temp][2]
        costs.pop(temp)
                    
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
