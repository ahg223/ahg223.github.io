---
title: "Algorithm_MapColoring"
excerpt: "BackTracking"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Algorithm
  - python
---

그래프의 노드 수와 엣지를 입력받으면 색칠하는데 필요한 최소의 색을 리턴하는 프로그램입니다.

```python

#!/usr/bin/env python
# coding: utf-8

# In[7]:


class Graph(): 
  
    def __init__(self, vertices): 
        self.V = vertices 
        self.graph = [[0 for column in range(vertices)] for row in range(vertices)] 
  
    def isSafe(self, v, colour, c): 
        for i in range(self.V): 
            if self.graph[v][i] == 1 and colour[i] == c: 
                return False
        return True
      
    def graphColourUtil(self, m, colour, v): 
        if v == self.V: 
            return True
  
        for c in range(1, m+1): 
            if self.isSafe(v, colour, c) == True: 
                colour[v] = c 
                if self.graphColourUtil(m, colour, v+1) == True: 
                    return True
                colour[v] = 0
  
    def graphColouring(self, m): 
        colour = [0] * self.V 
        if self.graphColourUtil(m, colour, 0) == False: 
            return False
  
        print ("Following are the assigned colours:")
        for c in colour: 
            print (c)
        return True
  
vertex=int(input("How many vertex your graph has? "))
edge=int(input("How many edge your graph has? "))

GRAPH=[[0 for i in range(vertex)] for j in range(vertex)]
for i in range(1,edge+1):
    a=int(input("Start node of %d edge: "%i))
    b=int(input("End node of %d edge: "%i))
    GRAPH[a][b]=1
    GRAPH[b][a]=1
g=Graph(vertex)
g.graph = GRAPH
print(GRAPH)
#[[0,1,1,1], [1,0,1,0], [1,1,0,1], [1,0,1,0]] 
m=4
g.graphColouring(m)



```

