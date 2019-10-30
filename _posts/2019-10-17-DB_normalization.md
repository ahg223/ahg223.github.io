---
title: "DB_정규화"
excerpt: "ComputerScience"

categories:
  - Study
tags:
  - ComputerScience
last_modified_at: 2019-08-23T22:00:00
---

47. 데이터베이스 정규화
1. 제 1 정규화 ⇒ 모든 도메인이 원자값

    [](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#e0c06c487b4b4a878ba8b72edb0e4830)

2. 제 2 정규화 ⇒ 제1 정규형이면서, 모든 컬럼이 완전 함수 종속

    [](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#21bafe936ee64110b6c860f2ed3c33e9)

3. 제 3 정규화 ⇒ 제2 정규형이면서, 기본키가 아닌 모든 속성이 기본키에 이행적 함수 종속이 안된 상태

    X, Y, Z 에 대해 X->Y 이고 Y->Z 이면 X->Z 가 성립한다. 이를 Z 가 X 에 이행적으로 함수 종속되었다라고 한다.

    학번 → 학부, 학부 → 등록금 이면 학번 → 등록금

    [](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#c7b68b32904f4efebb6d7ef7a0898f02)

4. BCNF ⇒ x→y는 trivial FD 거나, X는 릴레이션 R의 슈퍼키

               ⇒ 모든 결정자가 KEY인 경우

    [](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#a5fdcf816c884a77bcecb9f4ce08285a)

    위그림을 C→B, A,C→D,E로 분리

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}