---
title: "programmers_길 찾기 게임"
excerpt: "programmers_길 찾기 게임"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

import sys
sys.setrecursionlimit(10**6)

class Node(object):
    def __init__(self, index, data):
        self.index = index
        self.data = data
        self.left = self.right = None
        
class BinarySearchTree(object):
    def __init__(self):
        self.root = None
        self.order1=[]
        self.order2=[]
        
    def insert(self, index, data):
        self.root = self._insert_value(self.root,index, data)
        return self.root is not None

    def _insert_value(self, node,index, data):
        if node is None:
            node = Node(index,data)
        else:
            if data <= node.data:
                node.left = self._insert_value(node.left, index,data)
            else:
                node.right = self._insert_value(node.right, index,data)
        return node
    
    def pre_order_traversal(self):
        def _pre_order_traversal(root):
            if root is None:
                pass
            else:
                self.order1.append(root.index)
                _pre_order_traversal(root.left)
                _pre_order_traversal(root.right)
        _pre_order_traversal(self.root)
    
    def post_order_traversal(self):
        def _post_order_traversal(root):
            if root is None:
                pass
            else:
                _post_order_traversal(root.left)
                _post_order_traversal(root.right)
                self.order2.append(root.index)
        _post_order_traversal(self.root)
        
    def RETURN(self):
        return self.order1, self.order2


def solution(nodeinfo):
    nodeinfo.insert(0,[])
    Index=list(enumerate(nodeinfo))
    Index.pop(0)
    Index.sort(reverse=True,key=lambda x:x[1][1])
    
    Tree= BinarySearchTree()
    
    for i in Index: Tree.insert(i[0],i[1][0])
    Tree.post_order_traversal()
    Tree.pre_order_traversal()
    return list(Tree.RETURN())

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
