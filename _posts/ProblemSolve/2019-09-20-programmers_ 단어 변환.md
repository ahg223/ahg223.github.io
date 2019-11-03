---
title: "programmers_단어 변환"
excerpt: "programmers_단어 변환"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

import sys

temp=0
answer=sys.maxsize

def iter(begin, target, words):
    global temp
    global answer
    if words==[]: return
    
    for i in range(len(words)):
        correct=0
        for j in range(len(begin)):
            if words[i][j]==begin[j]: correct+=1
                
        if correct==len(begin)-1: 
            temp+=1
            if words[i]==target and answer>temp: answer=temp
            else: iter(words[i],target,words[:i]+words[i+1:])
            temp-=1
        

def solution(begin, target, words):
    iter(begin, target,words)
    
    if answer==sys.maxsize: return 0
    else: return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
