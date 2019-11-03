---
title: "programmers_파일명 정렬"
excerpt: "programmers_파일명 정렬"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(files):
    answer = []
    Data=[]
    Num=["0","1","2","3","4","5","6","7","8","9"]

    for num,file in enumerate(files):
        file=file.lower()
        temp=[]
        Flag=False
        for i in range(len(file)):
            if file[i] in Num:
                if len(temp)==0: 
                    temp.append(i)
                    Flag=True
                elif Flag: temp.append(i)
            else: Flag=False   
            
        file=file[:temp[0]]+"0"*(5-len(temp))+file[temp[0]:temp[-1]+1]
        for i in range(100):
            file=file.replace(" ","{")
            file=file.replace("-","}")
            file=file.replace(".","~")
        Data.append([num,file])

    Data=sorted(Data,key= lambda x:x[1])
    for i,_ in Data: answer.append(files[i])

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
