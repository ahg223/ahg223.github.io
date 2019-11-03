---
title: "programmers_셔틀버스"
excerpt: "programmers_셔틀버스"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def time(List):
    for i in range(len(List)):
        temp=List.pop(0)
        List.append(60*int(temp[:2])+int(temp[3:]))
    List.sort(reverse=False)
    return List

def Answer(answer):
    hh=str(answer//60)
    mm=str(answer%60)
    if len(hh)!=2: hh='0'+hh
    if len(mm)!=2: mm='0'+mm
    return hh+":"+mm

def solution(n, t, m, timetable):
    answer=540
    timetable=time(timetable)
    start=540-t
    
    for i in range(n):
        start+=t
        if i==n-1:
            if len(timetable)>=m and start>=timetable[m-1]: answer=timetable[m-1]-1
            else: answer=start
            break
        for j in range(m):
            if timetable[0]<=start: timetable.pop(0)
    
    return Answer(answer)

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
