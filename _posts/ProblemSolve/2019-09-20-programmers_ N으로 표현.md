---
title: "programmers_N으로 표현"
excerpt: "programmers_N으로 표현"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(N, number):
    ALL = [[N]]

    for i in range(2, 9):
        tmp2=0
        for j in range(i): tmp2+= N*10**j
        tmp = [tmp2]
        
        for index in range(0, int(i // 2)):
            for x in ALL[index]:
                for y in ALL[i - index - 2]:
                    tmp.append(x + y)
                    tmp.append(x * y)
                    if x - y > 0: tmp.append(x - y)
                    if y - x > 0: tmp.append(y - x)
                    if x != 0: tmp.append(y // x)
                    if y != 0: tmp.append(x // y)
                        
        tmp=set(tmp)
        if number in tmp:
            return i
        ALL.append(tmp)
        
    return -1

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
