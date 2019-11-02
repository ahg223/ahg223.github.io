---
title: "codility_DFS"
excerpt: "codility_DFS"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-08-14T16:40:00
---

```python


def DFS(x,y):
    global visited
    print(x,y)
    if x+y ==5: return

    for dx, dy in [(1,0),(-1,0),(0,-1),(0,1)]:
        i, j = x+dx, y+dy
        if i>-1 and j>-1 and visited[i][j]==0:
            visited[i][j]=1
            DFS(i,j)

visited= [ [0]*6 for i in range(6) ]
DFS(0,0)
for i in range(len(visited)): print(visited[i])


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
