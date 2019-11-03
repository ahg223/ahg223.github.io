---
title: "programmers_자동완성"
excerpt: "programmers_자동완성"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(words):
    answer = 0
    words.sort()
    
    for i in range(len(words)):
        temp1, temp2 = 0, 0
        
        Flag=False
        if i!=0:
            for j in range(len(words[i])):
                if j==len(words[i-1]): 
                    Flag=True
                    break
                if words[i][j]==words[i-1][j]: temp1+=1
                else: 
                    Flag=True
                    break
        if Flag:temp1+=1
            
        Flag=False
        if i!=len(words)-1:
            for j in range(len(words[i])):
                if j==len(words[i+1]): 
                    Flag=True
                    break
                if words[i][j]==words[i+1][j]: temp2+=1
                else: 
                    Flag=True
                    break
        if Flag:temp2+=1
                    
        if temp1>temp2: answer+=temp1
        else: answer+=temp2
#        print(temp1,temp2,answer)
    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
