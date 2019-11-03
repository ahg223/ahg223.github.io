---
title: "programmers_비밀지도"
excerpt: "programmers_비밀지도"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def Bin(arr):
    for i in range(len(arr)):
        temp=str(bin(arr.pop(i)))
        temp=temp[2:]
        while True:
            if len(temp)==len(arr)+1: break
            else: temp="0"+temp
        arr.insert(i,list(temp))
    return arr

def solution(n, arr1, arr2):
    answer = []
    arr1, arr2=Bin(arr1), Bin(arr2)
    for i in range(n):
        temp=""
        for j in range(n):
            if arr1[i][j] =="0" and arr2[i][j] == "0": temp+=" "
            if arr1[i][j] =="1" or arr2[i][j] == "1": temp+= "#"
        answer.append(temp)
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
