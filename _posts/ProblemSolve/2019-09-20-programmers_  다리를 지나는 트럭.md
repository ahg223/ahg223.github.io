---
title: "programmers_다리를 지나는 트럭"
excerpt: "programmers_다리를 지나는 트럭"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(bridge_length, weight, truck_weights):
    q=[0]*bridge_length
    sec=0
    while q:
        sec+=1#시작했으므로 1초씩 더함
        q.pop(0)#트럭이 지나감
        if truck_weights:
            if sum(q)+truck_weights[0]<=weight:
                q.append(truck_weights.pop(0))#다리에 트럭 올림
            else:
                q.append(0)#중량 초과면 트럭 안올림
    return sec
'''
def solution(bridge_length, weight, truck_weights):
    answer = 0
    
    truck_weights.sort()
    while truck_weights != []:
        trucks=[]
        trucks_sum=0
        trucks.append(truck_weights.pop(0))
        trucks_sum+=trucks[0]
        for i in range(len(truck_weights)):
            temp=0
            if weight>=trucks_sum+truck_weights[0]:
                temp=truck_weights.pop(0)
                trucks.append(temp)
                trucks_sum+=temp
            else: break
        print(trucks)
        answer+=bridge_length+len(trucks)-1
        
        j=0
        for i in range(len(trucks)-1):
            if j>=len(truck_weights): break
            trucks_sum-=trucks[i]
            if weight>=trucks_sum+truck_weights[j]:
                trucks_sum+=truck_weights[j]
                answer-=1
                j+=1
    return answer+1
    '''

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
