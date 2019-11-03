---
title: "programmers_매칭 점수"
excerpt: "programmers_매칭 점수"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def Basic(word,temp):
    Flag=True
    A=""
    temp=temp.split(" ")
    for i in range(len(temp)-1,-1,-1):
        if "</" in temp[i]: 
            temp.pop(i)
            Flag=False
        elif ">" in temp[i]: 
            while True:
                a=temp.pop(i)
                if "<" in a: break
                i+=1
            Flag=True
        elif Flag: temp.pop(i)
    for i in temp: A+=" "+i
    print(A)
    return A.upper().count(word.upper())


def solution(word, pages):
    DB=[]
    answer=[]
    for page in pages:
        page=page.split("\n")
        memory=[]
        count=0
        Flag=False
        for temp in page:
            if "meta property" in temp: 
                temp=temp.split("content=")
                memory.append(temp[1][:-2])
            if "</body>" in temp: Flag=False
            if Flag:
                if "<" in temp: count+=Basic(word,temp)
                else: count+=temp.upper().count(word.upper())
                if "a href=" in temp: 
                    temp=temp.split("a href=")
                    temp=temp[1].split(">")
                    memory.append(temp[0])
            if "<body>" in temp: Flag=True
            
        try: memory.append([count,count/(len(memory)-1),0])
        except: memory.append([count,0,0])
        DB.append(memory)
    
    for data1 in DB:
        for i in range(len(data1)):
            if i==0 or i==len(data1)-1: continue
            else:
                for data2 in DB:
                    if data1==data2: continue
                    elif data2[0]==data1[i]: data2[-1][2]+=data1[-1][1]
    for data1 in DB: data1[-1][-1]+=data1[-1][0]
    print(DB)
    for i,j in enumerate(DB): answer.append([i,j[-1][-1]])
    answer.sort(reverse=True,key=lambda x:x[1])
    return answer[0][0]

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
