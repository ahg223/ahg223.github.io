---
title: "programmers_후보키"
excerpt: "programmers_후보키"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

import itertools

def solution(relation):
    answer=0
    Answer=[]
    Index=[]
    _, __ = range(len(relation[0])),range(1,len(relation[0])+1)
    ___=list(itertools.combinations(list(range(len(relation))),2))
    
    for i in __: 
        List=(itertools.combinations(list(_),i))
        Index.extend(list(List))
    
    for index in Index:
        Set=[]
        for i in range(len(relation)):
            temp=[]
            for j in index: temp.append(relation[i][j])
            Set.append(temp)
        for x, y in ___: 
            if x!=y and Set[x]==Set[y]: 
                Set.append([])
                break
        if len(Set)==len(relation): Answer.append(index)
    
    ___=list(itertools.combinations(list(range(len(Answer))),2))
    Memory=[0 for i in range(len(Answer))]
    for x,y in ___:
        temp=0
        for i in Answer[x]:
            for j in Answer[y]:
                if i==j: temp+=1
        if temp==len(Answer[x]): Memory[y]=1
    count=0
    for i in Memory: count+=i
    return len(Answer)-count

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
