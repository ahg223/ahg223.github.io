---
title: "codility_Qsort"
excerpt: "codility_Qsort"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-08-14T16:40:00
---

```python

def Qsort(List,start,end):
    if len(List) <1: return List

    Left, Mid, Right = [], [], []
    pivot=List[end]

    for item in List:
        if item > pivot:
            Right.append(item)
        elif item == pivot:
            Mid.append(item)
        else:
            Left.append(item)
    return Qsort(Right,0,len(Right)-1)+Mid+Qsort(Left,0,len(Left)-1)

A=[1,3,6,3,5,4,5,7,9,0,7,6,4,2,2,3,5,5,2,12,23,123,423,55]

print(Qsort(A,0,len(A)-1))


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
