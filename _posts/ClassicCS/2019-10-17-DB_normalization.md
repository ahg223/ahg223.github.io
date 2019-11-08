---
title: "DB_정규화"
excerpt: "Database Normalization"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Database
---

## 데이터베이스 정규화
### 제 1 정규화   
⇒ 모든 도메인이 원자값
![1](https://user-images.githubusercontent.com/34998051/68484873-87c39500-0281-11ea-89f1-22e837615e30.gif)

### 제 2 정규화   
⇒ 제1 정규형이면서, 모든 컬럼이 완전 함수 종속
<img width="702" alt="2" src="https://user-images.githubusercontent.com/34998051/68484874-87c39500-0281-11ea-87f6-7114e103c53d.png">

### 제 3 정규화   
⇒ 제2 정규형이면서, 기본키가 아닌 모든 속성이 기본키에 이행적 함수 종속이 안된 상태

    X, Y, Z 에 대해 X->Y 이고 Y->Z 이면 X->Z 가 성립한다. 이를 Z 가 X 에 이행적으로 함수 종속되었다라고 한다.

    학번 → 학부, 학부 → 등록금 이면 학번 → 등록금
![3](https://user-images.githubusercontent.com/34998051/68484875-87c39500-0281-11ea-8315-952005551de0.png)  

### BCNF   
⇒ x→y는 trivial FD 거나, X는 릴레이션 R의 슈퍼키  
⇒ 모든 결정자가 KEY인 경우  
![4](https://user-images.githubusercontent.com/34998051/68484876-87c39500-0281-11ea-8d22-b6c78744c72e.png)

위그림을 C→B, A,C→D,E로 분리  
