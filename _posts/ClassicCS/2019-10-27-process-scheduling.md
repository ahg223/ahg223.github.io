---
title : Process Scheduling
excerpt : Detail - About Process Scheduling

categories:
  - ClassicCS
tags:
  - ClassicCS
  - OS
---

## 프로세스 스케쥴링(Process Scheduling)

CPU를 사용하려고 하는 프로세스들 사이의 우선 순위를 관리하는 일이다. 스케줄링은 처리율과 CPU 이용률을 증가시키고 오버헤드/응답시간/반환시간/대기시간 최소하 시키는 기법이다.  


## 선점 & 비선점 스케줄링

![image](https://user-images.githubusercontent.com/34998051/68737035-a204c680-0625-11ea-8e2e-7a0a6092d45b.png)


스케줄링은 적용시점에 따라 비선점형과 선점형으로 나눌 수 있다.   


### 비선점형 스케줄링(Non-Preemptive Scheduling)

![image](https://user-images.githubusercontent.com/34998051/68737040-a7faa780-0625-11ea-8aad-18d0192195a1.png)


선점 스케줄링의 경우에는 I/O요청, I/O응답, Interrupt발생, 작업완료 등의 상황에서 스케줄링이 일어날 수 있다. 하지만 비선점 스케줄링의 경우 프로세스가 스스로 CPU를 놓아주는 시점(작업이 완료되는 시점)에만 스케줄링이 일어난다. 

* FIFO
* 프로세스들은 Ready큐에 도착한 순서대로 CPU를 할당 받는다. 작업 완료 시간을 예측하기 매우 용이하다. 하지만 덜 중요한 작업이 중요한 작업을 기다리게 할 수도 있다.

|  <center>프로세스</center> |  <center>Burst Time</center> |  <center>Waiting Time</center> |  <center>Turnaround Time</center> |
|:--------:|:--------:|:--------:|:--------:|
|**p1** | 15 | 0 | 15 |
|**p2** | 5 | 15 | 20 |
|**p3** | 3 | 20 | 23 |

![image](https://user-images.githubusercontent.com/34998051/68737413-b7c6bb80-0626-11ea-8128-ddc483179855.png)

* HRN(Highest response ratio next)
  * 긴 작업과 짧은 작업간의 지나친 불평등을 어느 정도 보완한 기법. 수행시간의 길이와 대기 시간을 모두 고려해 우선순위를 정한다.
  * 우선순위 = (대기시간 + 실행시간)/실행시간

* SJF(Shortest Job First)
  * 큐 안에 있는 프로세스 중 수행시간이 짧은 것을 먼저 수행. 평균 대기 시간을 감소시킨다.
  
  |  <center>프로세스</center> |  <center>Burst Time</center> |  <center>Waiting Time</center> |  <center>Turnaround Time</center> |
  |:--------:|:--------:|:--------:|:--------:|
  |**p1** | 6 | 3 | 9 |
  |**p2** | 3 | 0 | 3 |
  |**p3** | 8 | 16 | 24 |
  |**p4** | 7 | 9 | 16 |
  
  SJF 스케줄링 순서 :  P2 → P1 → P4 → P3


### 선점형 스케줄링(Preemptive Scheduling)

CPU가 어떤 프로세스에 의해 점유 중이라도, 우선 순위가 높은 프로세스가 CPU를 차지한다. 우선 순위가 높은 프로세스를 빠르게 처리해야할 경우 유용하다.  
선점이 일어날 경우, 오버헤드가 발생하며 처리시간을 예측하기 힘들다.    

* SRT(Short Remaining Time)
  * 짧은 시간 순서대로 프로세스를 수행한다. 남은 처리 시간이 더 짧은 프로세스가 Ready 큐에 들어오면 그 프로세스가 바로 선점됨. SJF의 선점 버전.  
  
  |  <center>프로세스</center> |  <center>도착 시간</center>|  <center>Burst Time</center> |  <center>종료 시간</center>|  <center>Waiting Time</center> |  <center>Turnaround Time</center> |
  |:--------:|:--------:|:--------:|:--------:|
  |**p1** | 0 | 8 | 17 | 9 | 17 |
  |**p2** | 1 | 4 | 5 | 0 | 4 |
  |**p3** | 2 | 9 | 26 | 15 | 24 |
  |**p4** | 3 | 5 | 10 | 2 | 7 |

![image](https://user-images.githubusercontent.com/34998051/68737600-45a2a680-0627-11ea-9999-9b99a42f4174.png)


  
* RR (Round-Robin)
  * 각 프로세스는 같은 크기의 CPU 시간을 할당 받고 선입선출에 의해 행된다. 할당시간이 너무 크면 선입선출과 다를 바가 없어지고, 너무 작으면 오버헤드가 너무 커진다.

Time Slice = 3  
  |  <center>프로세스</center> |  <center>Burst Time</center> |  <center>Waiting Time</center> |  <center>Turnaround Time</center> |
  |:--------:|:--------:|:--------:|:--------:|
  |**p1** | 13 | 10 | 23 |
  |**p2** | 7 | 3 | 10 |
  |**p3** | 3 | 12 | 15 |
  ![image](https://user-images.githubusercontent.com/34998051/68737655-6834bf80-0627-11ea-9e76-7223bfd7345d.png)

* 우선순위(priority)
* 프로세스에게 우선순위를 정적, 혹은 동적으로 부여하여 우선순위가 높은 순서대로 처리한다. 동적으로 부여할 경우, 구현이 복잡하고 오버헤드가 많다는 단점이 있으나, 시스템의 응답속도를 증가시킨다.

  

## 정적 & 동적 스케줄링

프로세스 우선순위 변동 여부에 따라 구분할 수 있다.

### 정적 스케줄링(Static Scheduling)

프로세스에 부여된 우선순위가 바뀌지 않는다. 고정 우선순위 스케줄링이라고도 한다.

### 동적 스케줄링(Dynamic Scheduling)

스케줄링 과정에서 프로세스의 우선순위를 변동시킨다. 유동 우선순위 스케줄링이라고도 한다.

![image](https://user-images.githubusercontent.com/34998051/68737000-90bbba00-0625-11ea-8e0f-4af32df39788.png)


### 장기 스케줄링

어떤 프로세스를 커널에 등록할 것인가를 정한다.

### 중기 스케줄링

어떤 프로세스를 메모리에 할당할것인가를 정한다.

### 단기 스케줄링

어떤 프로세스를 CPU에 할당할것인가를 정한다.



