---
title: "programmers_조이스틱"
excerpt: "programmers_조이스틱"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def get_dct(nm, rev=False):
    i=0
    rm_n=list(nm)
    ct=-1
    while "".join(rm_n) != "A"*len(nm):
        if rm_n[i]!="A":
            rm_n[i]="A"
        ct+=1
        i+=(-1 if rev else 1)
    return ct

def solution(nm):
    az="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    ct=0
    for i, n in enumerate(nm):
        idx=az.index(n)
        idx_rv=len(az)-idx
        dis=idx if idx<idx_rv else idx_rv
        ct+=dis
    ct_r,ct_l=get_dct(nm),get_dct(nm,rev=True)
    return ct+(ct_r if ct_r<ct_l else ct_l)

'''
def solution(name):
    answer = 0
    count=0
    Max=0
    before='A'
    Flag=True
    for i in range(len(name)):
        if name[i]=='A':
            if before=='A': count+=1
            else: count=1
            if count>Max: Max=[i,count]
        else:
            temp=ord(name[i])-ord('A')
            if temp>=13: temp=26-temp
            answer+=temp
        before=name[i]
    left=
    right=
    return answer+len(name)-Max-1
'''

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
