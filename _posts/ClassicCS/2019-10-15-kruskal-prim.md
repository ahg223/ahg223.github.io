---
title : Kruskal / Prim Algorithm
excerpt : Detail - Kruskal / Prim Algorithm 

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Algorithm
---

먼저 kruskal과 prim알고리즘을 알기전에 MST를 알아야 한다.

## MST (최소 신장 트리, Minimum Spanning Tree)

spanning tree는 모든 정점을 포함하고 , 정점간 서로 연결되면서 사이클이 존재하지 않는 그래프이다.

이러한 spanning tree 중 edge weight 의 합이 최소인 spanning tree가 MST이다. 여기서 말하는 spanning tree란 그래프 G 의 모든 vertex 가 cycle 이 없이 연결된 형태다.

### Kruskal Algorithm

![KruskalDemo](https://user-images.githubusercontent.com/44635266/66712118-cf661680-edd2-11e9-952c-b043e2bcdb8a.gif)

> Pseudo Code

1. 초기화 작업으로 edge 없이 vertex 만으로 그래프를 구성한다.  
2. weight 가 제일 작은 edge 부터 검토한다. 그러기 위해선 Edge Set 을 non-decreasing 으로 sorting 해야 한다.  
3. 가장 작은 weight 에 해당하는 edge 를 추가하는데 추가할 때 그래프에 cycle 이 생기지 않는 경우에만 추가한다. 
4. spanning tree 가 완성되면 모든 vertex 들이 연결된 상태로 종료가 되고 완성될 수 없는 그래프에 대해서는 모든 edge 에 대해 판단이 이루어지면 종료된다.

#### 어떻게 cycle 생성 여부를 판단하는가?

![image](https://user-images.githubusercontent.com/34998051/68600149-53e8a980-04e5-11ea-8cbc-b1124c456c14.png)


`Union-Find` 알고리즘 혹은 Graph 의 각 vertex 에 `set-id`를 부여한다. 그리고 초기화 과정에서 모두 1~n 까지의 값으로 각각의 vertex 들을 초기화 한다. 여기서 0 은 어떠한 edge 와도 연결되지 않았음을 의미하게 된다. 연결할 때마다 `set-id`를 하나로 통일시키는데, 값이 동일한 `set-id` 개수가 많은 `set-id` 값으로 통일시킨다.  

#### Time Complexity

Edge 의 weight 를 기준으로 sorting - `O(E log E)`  
cycle 생성 여부를 검사하고 set-id 를 통일 - `O(E + V log V)`  
전체 시간 복잡도 : `O(E log E)`  

### Prim Algoirthm

![PrimAlgDemo](https://user-images.githubusercontent.com/44635266/66712119-cffead00-edd2-11e9-8b44-df14a85bf7da.gif)

1. 초기화 과정에서 한 개의 vertex 로 이루어진 초기 그래프 A 를 구성한다.  
2. 그 뒤 그래프 A 내부에 있는 vertex 로부터 외부에 있는 vertex 사이의 edge 를 연결하는데, 그 중 가장 작은 weight 의 edge 를 통해 연결되는 vertex 를 추가한다.  
3. 어떤 vertex 건 간에 상관없이 edge 의 weight 를 기준으로 연결  
4. 이렇게 연결된 vertex 는 그래프 A 에 포함된다. 
5. 위 과정을 반복하고 모든 vertex 들이 연결되면 종료한다.  

#### Time Complexity
전체 시간 복잡도 : `O(E log V)`




