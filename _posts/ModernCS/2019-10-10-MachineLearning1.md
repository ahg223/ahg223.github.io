---
title: "Machine Learning"
excerpt: "Cross Validation, Regression, Classification, 정규화, Local Global Minima"

categories:
  - ModernCS
tags:
  - ModernCS
  - MachineLearning
---

## Cross Validation
<img width="449" alt="스크린샷 2019-11-14 오후 9 35 51" src="https://user-images.githubusercontent.com/34998051/68857721-bc729900-0726-11ea-9873-41f20df1c49e.png">

교차검증으로도 불리는 cross validation은 모델을 평가하는 방법 중 하나입니다. 기본적으 로 데이터를 트레이닝 셋과 테스트 셋으로 분리해 모델의 계수를 추정과 성능 평가에 있어 데 이터 셋을 달리합니다. 하지만 이때 데이터 셋의 크기가 작은 경우, 테스트 셋의 크기가 작아 성능 평가의 신뢰성이 떨어지게 됩니다. 테스트 셋에 따라 성능이 상이하게 나온다면 모델 평 가지표로 사용하기 힘들게 됩니다.
이것을 방지하기 위해, 데이터 셋을 나눠 각각 트레이닝 셋과 테스트 셋으로 iterate 하게 학 습과 성능 평가를 수행하여 성능 평가를 합니다.
  
## 회귀 / 분류시 알맞은 metric
* Regression
    * MSE, RMSE, R-squared MAE
    * (R)MSPE, MAPE (R)MSLE
* Classification
    * Accuracy, Logloss, AUC
    * Cohoen’s (Quadratic weighted) Kappa
 
## 정규화
정규화를 왜 해야할까요? 정규화의 방법은 무엇이 있나요? 모델의 과적합을 방지하는 기법 을 총칭 L1 정규화 - 관련없는 특성의 가중치를 0으로 유도 L2 정규화- 이상점 가중치를 0에 가깝게 유도 드롭아웃 정규화 - 신경망 학습시 단일 경사 스텝이 일어날 때마다 특정 네트워 크 레이어의 유닛을 고정된 개수만큼 무작위로 선택하여 삭제 (조기중단-검증 데이터 세트의 손실이 증가하기 시작할 때, 즉 일반화 성능이 악화될 때 모델 학습을 종료)

## Local Minima와 Global Minima
Gradient Descent의 가장 핵심은 손실 함수가 최소값이 될 때의 매개변수의 값을 찾기 위해 서 손실 함수가 기울어진 방향으로 일정 거리 이동하고 그곳에서 다시 기울기를 구하고를 반 복하면서 최소값을 찾는 것인데 Local Minima는 전체 함수의 최저인 곳이 아니라 함수의 일 정 부분에서의 최소인 곳을 의미합니다. 함수 전체에서 최소값은 Global Minima입니다.
