---
title: "programmers_뉴스 클러스터링"
excerpt: "programmers_뉴스 클러스터링"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def dic(str1):
    List=[]
    str1=list(str1)
    alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    temp=str(str1[0])
    for i in range(1,len(str1)):
        if len(temp)!=2: temp=temp+str(str1[i])
        else: temp=temp[1]+str(str1[i])
        temp=temp.lower()
        if temp[0] in alphabet and temp[1] in alphabet: List.append(temp)
    return List

def solution(str1, str2):
    str1, str2= dic(str1), dic(str2)
    List=[]
    
    while True:
        Flag=False
        for i in range(len(str1)):
            for j in range(len(str2)):
                if str1[i]==str2[j]: 
                    List.append(str1[i])
                    str1.pop(i)
                    str2.pop(j)
                    Flag=True
                if Flag==True: break
            if Flag==True: break
        if Flag==False: break
    
    if len(List)==0 and len(str1)==0 and len(str2)==0: List.append(-1)
    return int(len(List)/(len(List)+len(str1)+len(str2))*65536)

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
