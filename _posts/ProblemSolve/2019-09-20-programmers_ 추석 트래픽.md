---
title: "programmers_추석 트래픽"
excerpt: "programmers_추석 트래픽"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def make_log(log):
    log=log[0:-1]
    log=log.split()
    log.pop(0)
    log[0]=3600*float(log[0][0:2])+60*float(log[0][3:5])+float(log[0][6:])
    log[1]=log[0]-float(log[1])+0.001
    log[0],log[1]=log[1],log[0]
    return log

def solution(lines):
    answer=0
    Data=[]
    for log in lines: Data.append(make_log(log))
    Data=sorted(Data,key=lambda x:x[0])
       
    print(Data)
        
    heap=[]
    for log in Data:
        for _ in range(len(heap)-1,-1,-1):
            if len(heap)>0  and heap[_][1]+1<=log[0]: heap.pop(_) 

        heap.append(log)
        if len(heap)>answer: answer=len(heap)  
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
