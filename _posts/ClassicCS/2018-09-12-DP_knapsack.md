---
title: "Algorithm_Knapsack"
excerpt: "Dynamic Programming"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Algorithm
  - python
---

Dynamic Programming으로 Kanpsack 문제를 풀었습니다.

```python

#!/usr/bin/env python
# coding: utf-8

# In[3]:


def knapSack(W , wt , val , n): 
    if n == 0 or W == 0 : 
        return 0
    if (wt[n-1] > W): 
        return knapSack(W , wt , val , n-1) 

    else: 
        return max(val[n-1] + knapSack(W-wt[n-1] , wt , val , n-1), 
                   knapSack(W , wt , val , n-1)) 


# In[4]:


n = int(input("Enter number of items:"))
val=[]
wt=[]
for i in range(n):
    val.append(int(input("Enter value of items:"))) 
    wt.append(int(input("Enter weight of items:")))
W = int(input("Enter size of knapsack:"))
print(knapSack(W , wt , val , n)) 



```

