---
title: "programmers_주식가격"
excerpt: "programmers_주식가격"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(prices):
    answer = []
    for i in range(len(prices)):
        temp=0
        for j in range(i,len(prices)):
#            print(i,j,answer)
            if prices[i]>prices[j]:
                answer.append(temp)
                break
            if j==len(prices)-1: answer.append(temp)
            temp+=1

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
