---
title: "programmers_방의 개수"
excerpt: "programmers_방의 개수"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(arrows):
    dirs = [ (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1), (-1, 0), (-1, 1) ]
    vertex = set()
    edge = set()
    (x, y) = (0, 0)
    vertex.add((x, y))

    for arrow in arrows:
        for _ in range(2):
            (nx, ny) = ( x + dirs[arrow][0], y + dirs[arrow][1] )
            if (x,y)>(nx,ny): edge1,edge2 = (x, y),(nx, ny)
            else: edge2,edge1 = (x, y),(nx, ny)
                
            vertex.add((nx, ny))
            edge.add((edge1,edge2))
            (x, y) = (nx, ny)
            
    return 1-len(vertex)+len(edge)

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
