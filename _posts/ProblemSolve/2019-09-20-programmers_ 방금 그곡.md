---
title: "programmers_방금그곡"
excerpt: "programmers_방금그곡"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def pre(Data):
    Answer=""
    for i in Data:
        Answer+=i
        if i=="#":
            if Answer[-2]=="C": Answer=Answer[:-2]+"c"
            elif Answer[-2]=="D": Answer=Answer[:-2]+"d"
            elif Answer[-2]=="F": Answer=Answer[:-2]+"f"
            elif Answer[-2]=="G": Answer=Answer[:-2]+"g"
            else: Answer=Answer[:-2]+"a"
    
    return Answer

def Preprocessing(Data):
    i,j=Data.pop(0),Data.pop(0)
    hh,mm=i.split(":")
    i=int(hh)*60+int(mm)
    hh,mm=j.split(":")
    j=int(hh)*60+int(mm)
    if i>j: Data.insert(0,1440-i%1440)
    else: Data.insert(0,j%1440-i%1440)
        
    Data.append(pre(Data.pop()))
    
    j=len(Data[2])
    temp=""
    for i in range(Data[0]): temp+=Data[2][i%j]
    Data[2]=temp
    return Data

def solution(m, musicinfos):
    answer=[]
    Data=[]
    m=pre(m)
    
    for data in musicinfos:
        data=data.split(",")
        Data.append(Preprocessing(data))
    
    for data in Data:
        if m in data[2]: answer.append([data[0],data[1]])
    
    if len(answer)==0: return '(None)'
    
    answer=sorted(answer,key=lambda x:x[0],reverse=True)
    
    return answer[0][1]

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
