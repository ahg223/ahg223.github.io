---
title: "programmers_더 맵게"
excerpt: "programmers_더 맵게"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(scoville, K):
    import heapq
    data = []
    for s in scoville:
        heapq.heappush(data, s)
    answer = 0
    while len(data) >0:
        if data[0] >= K:
            return answer
        a= heapq.heappop(data)
        if data != []:
            b =heapq.heappop(data)
            heapq.heappush(data,a + (b *2))
        answer +=1    
    return -1


'''
heap=[]

def down_heap(i):
    if len(heap)>i*2+1 and heap[i*2+1]<heap[i]: 
        heap[i],heap[i*2+1]=heap[i*2+1],heap[i]
        down_heap(i*2+1)
    if len(heap)>i*2+2 and heap[i*2+2]<heap[i]: 
        heap[i],heap[i*2+2]=heap[i*2+2],heap[i]
        down_heap(i*2+2)

def up_heap(i):
    Min=i//2+i%2
    if i==Min and 0==Min: return
    if heap[Min]<heap[i]: 
        heap[i],heap[Min]=heap[Min],heap[i]
        up_heap(Min)
        
def insert_heap(data):
    heap.append(data)
    up_heap(len(heap)-1)

def delete_heap(i):
    temp= heap.pop(i)
    down_heap(0)
    return temp

def solution(scoville, K):
    answer = 0
    for i in scoville: insert_heap(i)
    
    while True:
        if len(heap)<2: 
            answer=0
            break
        elif heap[0]>=K: break
        else: insert_heap(delete_heap(0)+delete_heap(0)*2)
        answer+=1
    
    
    if answer==0: return -1
    else: return answer
'''
'''
def solution(scoville, K):
    answer = 0
    while scoville!=[]:
        scoville.sort()
        if scoville[0]>K: break
        elif len(scoville)<2: 
            answer=0
            break
        else: scoville.append(scoville.pop(0)+2*scoville.pop(0))
        answer+=1
            
    if answer==0: return -1
    else: return answer
'''

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
