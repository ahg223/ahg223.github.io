---
title: "Algorithm_Huffman"
excerpt: "Greedy"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Algorithm
  - python
last_modified_at: 2018-09-12T08:20:00
---

Greedy 방식으로 허프만 압축 알고리즘을 구현했습니다. 2가지 방법으로 구현하였습니다. 

```python


#!/usr/bin/env python
# coding: utf-8

# In[1]:


import heapq


# In[2]:


class HeapNode:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None

    def __lt__(self, other):
        return self.freq < other.freq

    def __eq__(self, other):
        if(other == None):
            return False
        if(not isinstance(other, HeapNode)):
            return False
        return self.freq == other.freq


# In[11]:


class HuffmanCoding:
    def __init__(self):
        self.heap = []
        self.codes = {}

    def make_frequency_dict(self, text):
        frequency = {}
        for character in text:
            if not character in frequency:
                frequency[character] = 0
            frequency[character] += 1
        return frequency

    def make_heap(self, frequency):
        for key in frequency:
            node = HeapNode(key, frequency[key])
            heapq.heappush(self.heap, node)

    def merge_nodes(self):
        while(len(self.heap)>1):
            node1 = heapq.heappop(self.heap)
            node2 = heapq.heappop(self.heap)

            merged = HeapNode(None, node1.freq + node2.freq)
            merged.left = node1
            merged.right = node2

            heapq.heappush(self.heap, merged)


    def make_codes_helper(self, root, current_code):
        if(root == None):
            return

        if(root.char != None):
            self.codes[root.char] = current_code
            return

        self.make_codes_helper(root.left, current_code + "0")
        self.make_codes_helper(root.right, current_code + "1")


    def make_codes(self):
        root = heapq.heappop(self.heap)
        current_code = ""
        self.make_codes_helper(root, current_code)
        
        
    def compress(self):
        text=input("Typing string to make Huffman code\n")

        frequency = self.make_frequency_dict(text)
        self.make_heap(frequency)
        self.merge_nodes()
        self.make_codes()

        b = self.codes
        print(b)


# In[12]:



h = HuffmanCoding()
h.compress()
print(h.codes)




#!/usr/bin/env python
# coding: utf-8

# For making Huffman Tree

# In[1]:


Huff={}


# In[2]:


def MakeHuff(str):
    global Huff
    str=sorted(str)
    
    i=str.pop(0)
    try:
        j=str.pop(0)
    except:
        return
    
    str.append(i+j)
    Huff[i+j]=[i,j]
    MakeHuff(str)
    
def MakeHuff2(str):
    for i in str:
        Huff[i]=[]


# DFS

# In[3]:


def Root(str):
    root=0
    for i in str:
        root+=i
        
    return root

def DFS_Huff(root):
    global Huff
    print(Huff)
    visited=[]
    stack=[root]
    while stack:
        node=stack.pop()
        visited.append(node)
        for i in Huff[node]:
            if i not in visited+stack:
                try:
                    stack.append(i)
                except:
                    print("Key!!")
            print(stack)
            print(visited)
    return visited


# Main Func

# In[4]:


a=[0.25,0.25,0.2,0.15,0.15]
MakeHuff(a)
MakeHuff2(a)
DFS_Huff(Root(a))



```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
