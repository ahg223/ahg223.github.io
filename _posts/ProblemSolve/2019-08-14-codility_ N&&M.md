---
title: "codility_N&&M"
excerpt: "codility_N&&M"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-08-14T16:40:00
---

```python

'''
Answer=[]
def combination(List, Flag, temp):
    global Answer
    j=len(List)
    if Flag==0:
        Answer.append(temp)
        return

    else:
        for i in range(j):
            if List[i]==0:
                List[i]=1
                combination(List,Flag-1,temp+str(i+1)+" ")
                List[i]=0
                
    

N,M = map(int,input().split())
List=[0 for _ in range(N)]

combination(List,M,"")
for _ in range(len(Answer)): print(Answer[_])
'''
'''
def combination(List, Flag, start):
    j=len(List)
    if Flag==0:
        for i in range(j):
            if List[i]==1: print(i+1,end=" ")
        print("")
        return

    else:
        for i in range(start,j):
            if List[i]==0:
                List[i]=1
                combination(List,Flag-1,i)
                List[i]=0
                
    

N,M = map(int,input().split())
List=[0 for _ in range(N)]

combination(List,M,0)
'''

Answer=[]
def combination(List, Flag, temp):
    global Answer
    j=len(List)
    if Flag==0:
        Answer.append(temp)
        return

    else:
        for i in range(j): combination(List,Flag-1,temp+str(i+1)+" ")
                
    

N,M = map(int,input().split())
List=[0 for _ in range(N)]

combination(List,M,"")
for _ in range(len(Answer)): print(Answer[_])


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
