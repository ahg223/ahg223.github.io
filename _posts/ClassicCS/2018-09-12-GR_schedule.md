---
title: "Algorithm_Task_Scheduling"
excerpt: "Greedy"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Algorithm
  - python
last_modified_at: 2018-09-12T08:20:00
---

N개의 작업을 할당받은 시간과 소요되는 시간을 입력받으면, 최소 시간을 출력합니다. 

```python

#!/usr/bin/env python
# coding: utf-8

# Task Scheduling

# In[46]:


def interval_scheduling(stimes, ftimes, count):
    if len(stimes)==0: 
        print('A maximum-size subset of activities that are mutually compatible is',count)
        return

    index = list(range(len(stimes)))
    
    index.sort(key=lambda i: ftimes[i])

    maximal_set = set()
    prev_finish_time = 0
    
    for i in index:
        if stimes[i] >= prev_finish_time:
            maximal_set.add(i)
            prev_finish_time = ftimes[i]
            
    maximal_set=sorted(maximal_set,reverse=True)
    for i in maximal_set:
        stimes.pop(i)
        ftimes.pop(i)
    count+=1

    interval_scheduling(stimes,ftimes,count)
 


# In[47]:



n = int(input('Enter number of activities: '))
stimes = input('Enter the start time of the {} activities in order: '.format(n)).split()
stimes = [int(st) for st in stimes]
ftimes = input('Enter the finish times of the {} activities in order: '.format(n)).split()
ftimes = [int(ft) for ft in ftimes]

interval_scheduling(stimes, ftimes,0)



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
