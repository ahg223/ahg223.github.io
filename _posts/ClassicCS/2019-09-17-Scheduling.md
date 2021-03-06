---
title: "process scheduling"
excerpt: "Summary - 스케줄러 및 스케줄링 알고리즘"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - OS
---

## 프로세스 스케줄러
    - Job Queue: 모든 프로세스
    - Ready Queue: 현재 메모리에 있고 CPU를 잡아서 실행되기를 기다리는 프로세스의 집합
    - Device Queue: Device I/O 작업을 대기하고 있는 프로세스의 집합
    ### 각각의 프로세스 스케줄러에 프로세스를 넣고 빼주는 스케줄러
    - 장기 스케줄러
        - 메모리와 디스크 사이
        - new → ready
    - 단기 스케줄러
        - CPU와 메모리 사이
        - ready → running → waiting → ready
    - 중기 스케줄러
        - 메모리에서 디스크로
        - ready → suspend

    ![Untitled](https://user-images.githubusercontent.com/34998051/68485183-25b75f80-0282-11ea-818f-ceec81df07bd.jpeg)


### CPU 스케줄러(Ready Queue의 프로세스들을 대상으로)
    - 선점스케줄링: 점유중에 다른 프로세스가 CPU차지 하는것

    - FCFS
        - Convoy effect
    - SJF(Shortest job first)
        - 비선점
        - Starvation
    - SRT(Shortest Remaining time First)
        - SJF의 선점형 버전
        - Starvation
    - Priority Scheduling
        - 선점 및 비선점 가능
        - Starvation → aging
    - Round Robin
        - context switching 시간

    대기시간, 평균대기시간, 반환시간, 평균반환시간 계산, 응답시간 (round robin)

    ![IMG_0210](https://user-images.githubusercontent.com/34998051/68485182-25b75f80-0282-11ea-82d4-6ad5599b709e.jpg)


    P5의 대기시간: (19-4) + (35-24) + (45-40) = 31 // 평균 대기시간: (19+33+27+31)/5 = 24.4

    P5의 반환시간: (49-4) = 45 // 평균 반환시간: (29+61+33+16+45)/5 = 36.8
