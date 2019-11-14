---
title: "Machine Learning"
excerpt: "SVM, feature vector, logistic regression, OLS regression"

categories:
  - ModernCS
tags:
  - ModernCS
  - MachineLearning
---

## SVM은 왜 좋을까
SVM(Support Vector Machine)은 보통 Feature Space에서 판별경계가 되는 Hyperplane을
기준으로 데이터를 이진 분류하는 데 사용합니다.  
SVM을 학습하는 것은 데이터를 제대로 분류하는 동시에 두 클래스 샘플 간 거리를 최대화 하는 Hyperplane을 찾는 조건부 최적화 문제를 푸는 것입니다. 이 때 Lagrange Multiplier Method를 적용한 목적 함수가 이차식으로 표현되는 Convex Optimization problem이기 때문에 신경망과 달리 Local minima에 수렴하지 않고 항상 Global minima, 즉 언제나 현재 가능한 최적의 해라는 것이 보장됩니다. 또한 Kernel Trick을 사용하면 비선형 데이터에 대한 분류도 가능합니다.  
그리고 SVM은 Neural network와 같은 Discriminative model로 데이터 분포에 대한 특별한 지식이 없이도 높은 정확도의 모델을 학습시킬 수 있기 때문에 분류 뿐만 아니라 회귀, 이상 치 탐지 등 다양한 문제상황에서 쓰일 수 있는 강력한 방법으로 알려져 있습니다.  

## feature vector란
관찰 대상인 객체에서 발견된 개별적이고 측정가능한 경험적인 속성을 피쳐(Featrue)라고 합니다. 이 피쳐들의 집합을 벡터형식으로 나타낸 것을 feature vector라고 하고, 이 feature vector로 이루어진 vector space를 feature space라고 합니다.  
추가로 비정제 데이터에 있는 범주형 특성이나 문자열로 되어있는 값들은 모델의 대수학적 인 계산을 위해서 부동 소수점 값으로 매핑해야 하는데 이러한 과정을 특성추출이라고 합니다.  

## 좋은 모델의 정의
훈련 데이터에만 잘 맞는 ovefitting된 모델이 아닌, 일반화 능력이 좋은 모델이 좋은 모델이 라고 생각합니다. 또 효율성 측면에서는 비슷한 성능일 때 연산량이 덜 필요한 가벼운 모델이 실용적으로 더 좋은 모델이라고 할 수 있을 것 같습니다.  

## 50개의 작은 의사결정 나무 vs 큰 의사결정 나무
여러개의 작은 의사결정 나무는 weak learner를 앙상블하여 strong learner로 만들어 모델을 더 robust하게 만듭니다. 하나의 tree가 잘못 학습되더라도 다른 tree 모델들로 인해 틀린 예측을 할 가능성이 적어지고 overfitting할 가능성이 적어집니다. 또한 학습시에도 여러번의 작은 step으로 진행하는 것이 한번에 큰 step으로 하는 것보다 모델의 성능을 올리는 데 효과 적입니다.  

## 스팸 필터에 로지스틱 리그레션을 많이 사용하는 이유
스팸 필터는 어떤 메일이 스팸인지 아닌지를 분류하는 이진 분류기입니다. 따라서 샘플이 특정 클래스에 속할 확률을 추정하는 데 널리 사용되는 로지스틱 리그레션 모델을 많이 사용합니다.  
     
## OLS(ordinary least squre) regression 공식

<img width="499" alt="스크린샷 2019-11-14 오후 9 55 30" src="https://user-images.githubusercontent.com/34998051/68858913-7b2fb880-0729-11ea-8a28-1f1068c603d1.png">
