---
title: "programmers_서울에서 경산까지"
excerpt: "programmers_서울에서 경산까지"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(K, travel):
    Answer=[[0 for i in range(K+1)] for j in range(len(travel)+1)] 

    for i in range(1,len(travel)+1):
        [Wtime,Wmoney,Btime,Bmoney]=travel[i-1]
        for j in range(K+1):
            walk,bike=-1,-1
            if j>=Wtime and Answer[i-1][j-Wtime]!=-1: walk=Answer[i-1][j-Wtime]+Wmoney
            if j>=Btime and Answer[i-1][j-Btime]!=-1: bike=Answer[i-1][j-Btime]+Bmoney
            Answer[i][j]=max(walk,bike)

    for i in Answer:
        for j in i:print(j,end=" ")
        print("\n")

    return  Answer[len(travel)][K]

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
