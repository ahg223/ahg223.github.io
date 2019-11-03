---
title: "programmers_완주하지 못한 선수"
excerpt: "programmers_완주하지 못한 선수"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(participant, completion):
participant.sort()
completion.sort()
for i in range(len(participant)-1,-1,-1):
    Flag=True
    for j in range(len(completion)-1,-1,-1):
        if participant[i] == completion[j]:
            participant.pop(i)
            completion.pop(j)
            Flag=False
            break
    if Flag==True: return participant[i]

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
