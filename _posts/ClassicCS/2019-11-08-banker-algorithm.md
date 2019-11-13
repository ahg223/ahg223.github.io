---
title : Banker's Algoirhtm
excerpt : Detail - Context Switching, DeadLock

categories:
  - ClassicCS
tags:
  - ClassicCS
  - OS
---  

## 은행원 알고리즘(Banker's Alogirthm)

교착상태 회피 대표 기법  

교착상태에 빠질 가능성이 있는지 판단하기 위해 상태를 '안전상태(safe state)'와 '불안전상태(unsafe state)'로 나눈다.   
그 후, **운영체제는 안전상태를 유지할 수 있는 요구만을 수락하고 불안전 상태를 초래할 사용자의 요구는 나중에 만족될 수 있을 때까지 계속 거절한다.**  
'최소한 고객 한명에게 대출해줄 금액은 항상 은행이 보유하고 있어야 한다'는 개념이다.  

## 용어 정리

![image](https://user-images.githubusercontent.com/44635266/68369206-113d6f00-017d-11ea-8069-c5def5a07709.png)

* 안전상태 (Safe State)
  * 시스템이 교착상태를 일으키지 않는다.
  * 각 프로세스가 요구한 최대 요구량만큼 필요한 자원을 할당해 줄 수 있는 상태.
  * 안전순서 열이 존재하는 상태.
* 불안전상태 (Unsafe State) 
  * 교착상태 필요조건 - 교착상태는 불안전상태에서만 발생한다. 
  * Unsafe state라고 해서 무조건 교착상태가 발생하는 것은 아니다.
  * 안전순서열이 존재하지 않는 상태.
* Max
  * 각 프로세스가 자원을 얼마나 요청할 수 있는지
* Allocated
  * 각 프로세스가 현재 보유하고 있는 자원은 얼마인지
* Available
  * 시스템이 얼마나 자원을 보유하고 있는지
* Need
  * 프로세스가 작업을 완료하기위해 필요한 자원의 개수
  

### 은행원 알고리즘 단점

* 할당할 수 있는 자원의 수가 일정해야 한다.
* 사용자 수가 일정해야 한다.
* 항상 불안전 상태를 방지해야 하므로 자원 이용도가 낮다.
* 최대 자원 요구량을 미리 알아야 한다.
* 프로세스들은 유한한 시간 안에 자원을 반납해야 한다.

> Source Code (references / https://www.geeksforgeeks.org/)

```
// Banker's Algorithm 
#include <stdio.h> 
#include <iostream>

using namespace std;

int main() 
{ 
    // P0, P1, P2, P3, P4 are the Process names here 
  
    int n, m, i, j, k; 
    n = 5; // Number of processes 
    m = 3; // Number of resources 
    int alloc[5][3] = { { 0, 1, 0 }, // P0    // Allocation Matrix 
                        { 2, 0, 0 }, // P1 
                        { 3, 0, 2 }, // P2 
                        { 2, 1, 1 }, // P3 
                        { 0, 0, 2 } }; // P4 
  
    int max[5][3] = { { 7, 5, 3 }, // P0    // MAX Matrix 
                      { 3, 2, 2 }, // P1 
                      { 9, 0, 2 }, // P2 
                      { 2, 2, 2 }, // P3 
                      { 4, 3, 3 } }; // P4 
  
    int avail[3] = { 3, 3, 2 }; // Available Resources 
  
    int f[n], ans[n], ind = 0; 
    for (k = 0; k < n; k++) { 
        f[k] = 0; 
    } 
    int need[n][m]; 
    for (i = 0; i < n; i++) { 
        for (j = 0; j < m; j++) 
            need[i][j] = max[i][j] - alloc[i][j]; 
    } 
    int y = 0; 
    for (k = 0; k < 5; k++) { 
        for (i = 0; i < n; i++) { 
            if (f[i] == 0) { 
                
                int flag = 0; 
                for (j = 0; j < m; j++) { 
                    if (need[i][j] > avail[j]){ 
                        flag = 1; 
                         break; 
                    } 
                } 
  
                if (flag == 0) { 
                    ans[ind++] = i; 
                    for (y = 0; y < m; y++) 
                        avail[y] += alloc[i][y]; 
                    f[i] = 1; 
                } 
            } 
        } 
    } 
  
    printf("Following is the SAFE Sequence\n"); 
    for (i = 0; i < n - 1; i++) 
        printf(" P%d ->", ans[i]); 
    printf(" P%d", ans[n - 1]); 
  
    return (0); 
  
    // This code is contributed by Deep Baldha (CandyZack) 
} 
```
