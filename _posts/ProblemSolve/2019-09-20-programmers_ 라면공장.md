---
title: "programmers_라면공장"
excerpt: "programmers_라면공장"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(stock, dates, supplies, k):
    answer = 0
    date = 0
    idx = 0
    reserve = []
    while stock > 0:
        stock -= 1
        date += 1
        if idx < len(dates) and date >= dates[idx]:
            reserve.append(supplies[idx])
            idx += 1
        elif idx < len(dates):
            if stock != 0 and date + stock < k:
                t = dates[idx] - date
                if t < stock:
                    date += t
                    stock -= t
        if stock == 0:
            stock = max(reserve)
            reserve.remove(stock)
            answer += 1
        if date + stock >= k:
            break

    return answer
'''
def solution(stock, dates, supplies, k):
    answer = 0
    count=0
    dates.append(k)
    temp=sorted(supplies,reverse=True)
    val=0
    index=[]
    
    for i in range(len(temp)):
        val+=temp[i]
        index.append(temp[i])
        if val>=k: break
    
    for i in range(len(index)): index.append(supplies.index(index[i]))
    index=index[len(index)//2:]
    
    while k>=stock:
        print(stock)
        if count in index:
            stock+=supplies[count]
            answer+=1
            count+=1
            continue
            
        if dates[count+1]>=stock:
            stock+=supplies[count]
            answer+=1
        count+=1
    print(stock)
    return answer
'''

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
