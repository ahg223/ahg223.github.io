---
title: "programmers_전화번호 목록"
excerpt: "programmers_전화번호 목록"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(phone_book):

    phone_book.sort(key= lambda x: len(x))
    for i in range(len(phone_book)):
        temp=phone_book.pop(0)
        for j in range(len(phone_book)):
            length=0
            while length!=len(temp):
                if temp[length] == phone_book[j][length]: length+=1
                else: break
            #print(temp, phone_book[j],length)
            if length==len(temp): return False
    return True

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
