---
title: "programmers_압축"
excerpt: "programmers_압축"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

Dic=[0,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
i=0
answer=[]
def recur(msg,temp):
    global answer
    global Dic
    global i
    try: _=temp[-1]+msg[i+1]
    except IndexError:
        i+=1
        answer.append(Dic.index(temp[-1]))
        return 
    i+=1
    
    if _ in Dic:
        temp.append(_)
        recur(msg,temp)
        return
    else: 
        Dic.append(_)
        j=Dic.index(temp[-1])
        answer.append(j)
    

def solution(msg):
    global answer
    global Dic
    global i
    
    while len(msg)>i:
        temp=[]
        temp.append(msg[i])
        recur(msg,temp)
    
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
