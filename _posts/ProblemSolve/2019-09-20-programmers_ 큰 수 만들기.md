---
title: "programmers_큰 수 만들기"
excerpt: "programmers_큰 수 만들기"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(number, k):
    answer = ''

    if k==1:
        temp=0
        Min=number[0]
        i=0
        while True:
            if i>len(number)-2: break
            i+=1
            if number[i]<Min:
                Min=number[i]
                temp=i
        return number[:i]+number[i+1:]

    while k>0:
        temp=0
        Max=number[0]
        for i in range(1,k+1):
            if Max=='9': break
            if number[i]>Max:
                Max=number[i]
                temp=i
        k=k-temp
        answer+=number[temp]
        number=number[temp+1:]
        
    return answer+number

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
