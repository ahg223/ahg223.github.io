---
title: "programmers_카펫"
excerpt: "programmers_카펫"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(brown, red):
    answer = []
    summ=2+brown//2
    for column in range(3,summ):
        row= summ-column
        print(row,column,red)
        if red==(row-2)*(column-2):
            answer.append(row)
            answer.append(column)
            print(answer)
            break

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
