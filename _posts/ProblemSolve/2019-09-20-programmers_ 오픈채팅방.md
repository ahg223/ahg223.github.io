---
title: "programmers_오픈채팅방"
excerpt: "programmers_오픈채팅방"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(record):
    answer = []
    Answer=[]
    ID={}

    for cmd in record:
        cmd=cmd.split()
        if cmd[0]=="Change": ID[cmd[1]]=cmd[2]
        
        elif cmd[0]=="Enter": 
            ID[cmd[1]]=cmd[2]
            answer.append([cmd[1],"님이 들어왔습니다."])
        elif cmd[0]=="Leave": answer.append([cmd[1],"님이 나갔습니다."])

    for cmd in answer:
        Answer.append(str(ID[cmd[0]]+cmd[1]))
    return Answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
