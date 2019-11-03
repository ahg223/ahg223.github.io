---
title: "programmers_소수 찾기"
excerpt: "programmers_소수 찾기"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def permutation(list_arr,num,flag):
    if flag==0:
        temp=""
        for i in num:
            temp+=i
            list_arr.append(int(temp))
        return;
    for i in range(flag-1,-1,-1):
        num[i],num[flag-1]=num[flag-1],num[i]
        permutation(list_arr,num,flag-1)
        num[i],num[flag-1]=num[flag-1],num[i]
        
def Isprime(list_arr,answer):
    for List in list_arr:
        isprime=True
        if List==1 or List==0: isprime=False
        num=2
        
        while (num*num)<=List:
            if List%num==0:
                isprime=False
                break
            num+=1
        if isprime==True:
            answer+=1
    return answer

def solution(numbers):
    answer = 0
    list_arr=[]
    permutation(list_arr,list(numbers),len(numbers))
            
    list_arr=list(set(list_arr))
    
    return Isprime(list_arr,answer)

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
