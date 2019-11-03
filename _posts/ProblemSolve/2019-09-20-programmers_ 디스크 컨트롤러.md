---
title: "programmers_디스크 컨트롤러"
excerpt: "programmers_디스크 컨트롤러"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

import sys

def solution(jobs):
    answer = 0
    i=0
    run=0
    Len=len(jobs)
    jobs.sort()
    
    while jobs!=[]:
        Min=sys.maxsize
        for j in range(len(jobs)):
            if jobs[j][0]>run:break
            if Min>jobs[j][1]: Min,i=jobs[j][1],j
        if Min==sys.maxsize: run=jobs[0][0]
        run+=jobs[i][1]
        answer+=run-jobs[i][0]
        jobs.pop(i)        
    return answer//Len

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
