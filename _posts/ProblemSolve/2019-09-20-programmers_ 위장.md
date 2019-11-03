---
title: "programmers_위장"
excerpt: "programmers_위장"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(clothes):
answer=1
temp = []
temp2 = [0 for x in range(30)]
for i in clothes:
    if i[1] not in temp: temp.append(i[1])
    temp2[temp.index(i[1])]+=1
for i in temp2:
    if i==0: break
    answer*=(i+1)
return answer-1

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
