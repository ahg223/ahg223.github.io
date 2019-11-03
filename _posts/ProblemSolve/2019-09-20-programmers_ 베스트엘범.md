---
title: "programmers_베스트엘범"
excerpt: "programmers_"베스트엘범"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(genres, plays):
    answer = []
    temp = []
    temp2 = [0 for x in range(100)]
    temp3 = [[-1,-1,-1,-1] for x in range(100)]
    temp4 = []

    for i in range(len(genres)):
        if genres[i] not in temp: temp.append(genres[i])
        temp2[temp.index(genres[i])]+=plays[i]
        if temp3[temp.index(genres[i])][2]<plays[i]: 
            temp3[temp.index(genres[i])][1]=temp3[temp.index(genres[i])][0]
            temp3[temp.index(genres[i])][3]=temp3[temp.index(genres[i])][2]
            temp3[temp.index(genres[i])][0]=i
            temp3[temp.index(genres[i])][2]=plays[i]
        elif temp3[temp.index(genres[i])][3]<plays[i]: 
            temp3[temp.index(genres[i])][1]=i
            temp3[temp.index(genres[i])][3]=plays[i]
            
    for i in range(100):
        if temp2[i]==0: break
        temp4.append([temp2[i],temp3[i][0],temp3[i][1]])

    temp4.sort(reverse=True,key= lambda x:x[0])
    #print(temp4)

    for i in temp4:
        answer.append(i[1])
        if i[2]!=-1:answer.append(i[2])
        
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
