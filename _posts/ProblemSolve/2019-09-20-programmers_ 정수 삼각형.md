---
title: "programmers_정수 삼각형"
excerpt: "programmers_정수 삼각형"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(triangle):
    TRIANGLE=[]
    for i in triangle:
        List=[]
        for j in i:List.append(0)
        TRIANGLE.append(List)
    TRIANGLE[0][0]=triangle[0][0]

    for depth in range(1,len(triangle)):
        for index in range(len(triangle[depth])):
            if index!=0:
                if TRIANGLE[depth][index]<triangle[depth][index]+TRIANGLE[depth-1][index-1]:
                    TRIANGLE[depth][index]=triangle[depth][index]+TRIANGLE[depth-1][index-1]
            if index!=len(triangle[depth])-1:
                if TRIANGLE[depth][index]<triangle[depth][index]+TRIANGLE[depth-1][index]:
                    TRIANGLE[depth][index]=triangle[depth][index]+TRIANGLE[depth-1][index]
    #print(TRIANGLE)
    return max(TRIANGLE[len(triangle)-1])

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
