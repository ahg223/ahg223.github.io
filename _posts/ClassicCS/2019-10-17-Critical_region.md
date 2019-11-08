---
title: "Critical Region"
excerpt: "임계 영역, 락, 경쟁 조건"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - OS
---

## 임계영역 문제 해결
    - 상호배제(Mutual Exclusion): p1이 임계영역에서 실행중이면 다른 프로세스는 임계영역에서 실행될 수 없음
    - Progress: 임계영역에서 실행중인 프로세스가 없고 별도의 동작이 없는 프로세스들만 임계영역 진입 후보가 된다.
    - Bounded Waiting(한정된 대기): P1이 임계영역에 진입신청후부터 들어갈때까지 다른 프로세스들이 임계영역에 진입하는 횟수가 제한되어있어야한다.


## Lock
    - 세마포어: 카운팅 세마포어 / 자원의 갯수 / P는 줄이고 V는 늘리고
    - 뮤텍스: 이진세마포어 / 0과 1

## Race conditin

    test.txt에 Test라고 쓰여있다고 가정

    A는 test.txt에 1234를 write

    B는 test.txt 내용을 삭제

    C는 test.txt를 출력

    A,B,C를 동시 실행시키면 결과가 계속 다름

## 식사하는 철학가, 은행가 알고리즘
