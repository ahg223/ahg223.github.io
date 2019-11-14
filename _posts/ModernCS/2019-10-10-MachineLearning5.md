---
title: "Machine Learning"
excerpt: "K means, L1 L2 정규화, XGBoost, 앙상블 방법"

categories:
  - ModernCS
tags:
  - ModernCS
  - MachineLearning
---

## K-means의 대표적 의미론적 단점 
 - 계산량 많다는 것 이외 
K-means알고리즘은 비지도 학습 중 Clustering(군집화)를 하기 위한 기법입니다.
임의로 K개의 클러스터 중심점을 선택한 후 각 레코드를 거리가 가장 가까운 중심점의 클러 스터에 할당하고, 그 거리의 제곱합이 최소가 되도록 새로 할당된 레코드들을 통해 클러스터 중심점을 갱신하는 과정을 반복합니다. 각 레코드에 대한 클러스터 할당이 더 이상 변하지 않 을 때 알고리즘이 수렴하며 종료합니다.  

이 과정에서 사용할 K의 값을 지정해주어야 하는데 통계적으로 최적의 K값을 찾을 수 있는 방법이 없다는 문제가 있습니다. 또한 알고리즘이 초기화 조건에 따라 전역 최솟값이 아닌 지 역 최솟값으로 수렴할 수 있기 때문에 초기화 조건을 다르게 하여 여러번 실시해야 합니다. (초기화 조건에 따라 예측 결과가 다를 수 있음) 그리고 제곱값을 사용하기 때문에 이상값 (Outlier)에 민감할 수 있습니다. 또한 각 클러스터의 크기나 밀도가 다르거나, 구형에 가까 운 모양이 아닐 때 제대로 학습할 수 없는 문제가 있습니다.  

## L1, L2 정규화
  
단순히 모델의 cost function의 값이 작아지도록 학습을 하다 보면 특성 가중치 값들이 커지 면서 모델의 일반화 능력을 악화시킬 수 있습니다. 따라서 model의 복잡도에 대한 패널티로 Overfitting을 예방하고 Generalization 성능을 높이는 과정을 정규화(Regularization)라고 합니다.  

L1 정규화는 기존의 cost function 에 페널티로 모델 가중치의 L1 Norm(가중치 각 요소 절대값의 합)을 사용하는 것으로 Lasso(Least Absolute Shrinkage and Selection Operator 라고도 불립니다.  
<img width="101" alt="스크린샷 2019-11-14 오후 9 50 28" src="https://user-images.githubusercontent.com/34998051/68858624-c7c6c400-0728-11ea-841e-5acb3a4e38be.png">  

L2 정규화는 페널티로 모델 가중치의 L2 Norm(가중치 각 요소 제곱의 합)을 사용하는 것으로 Ridge라고도 불립니다.  
<img width="106" alt="스크린샷 2019-11-14 오후 9 50 38" src="https://user-images.githubusercontent.com/34998051/68858635-cd240e80-0728-11ea-8492-81560da0c9d7.png">

페널티의 값에 상수를 곱해 제약의 정도를 조절할 수 있는데 값이 너무 높으면 모델이단순해지지만 Underfitting이 될 위험이 있고, 너무 낮으면 Overfitting을 막을만큼 정규화가 충분하지 않게 됩니다.  
L1 정규화는 대부분의 요소값이 0인 sparse feature에 의존한 모델에서 불필요한 피처에 대 응하는 가중치들을 정확히 0으로 만들어 해당 피처를 모델이 무시하도록 하여 변수선택 (Feature Selection)효과가 있습니다.  
반면 L2 정규화는 아주 큰 값이나 작은 값을 가지는 outlier 모델 가중치에 대해 정확히 0은 아니지만 0에 가깝게 만듭니다. 이를 통해 outlier의 영향을 적게 받게 만들어 일반화에 적합 한 특성을 갖게 만듭니다.  
추가로 L1과 L2 Norm을 동시에 사용하는 엘라스틱넷(Elastic Net)이 있는데 많은 변수를 갖 고 있는 큰 데이터 셋에서 유용합니다.  

## XGBoost
XGBoost는 앙상블 기법 중 Boosting의 한 종류인데 Boosting이란 이전 round에서 오분류
된 데이터에 더 많은 가중치를 주어 다음 round에 더 잘 학습될 수 있도록 하는 방법입니다.  

이때 오분류된 데이터를 반영하는 방법에 따라 부스팅 기법이 나뉘는데, 처음에 오는 weak learner는 target값을 예측하고, 그 다음 weak learner부터는 이전 round의 잔차(Residual) 를 예측하는 새로운 모델을 학습하는 방식을 Gradient Boosting이라 합니다.  

XGBoost는 바로 이 Gradient Boosting의 개념을 Decision Tree에 적용한 알고리즘입니다. 다만 일반적인 Gradient Boosting과 달리 학습을 위한 목적식에 Regularization term을 추가하여 모델이 overfitting 되는 것을 방지해줍니다. 또한 분산처리 알고리즘이 포함되어 있기 때문에 속도면에서도 더 빠릅니다.   

XGBoost를 이용하여 여러 Kaggle Competition에서 우수한 성적을 거둔 사례가 많았기 때 문에 빠른속도로 유명해지게 되었습니다.  

## 앙상블 방법
여러개의 모델을 각각 학습시키고 모델들의 예측결과들을 이용해 하나의 모델보다 더 나은
값을 예측하는 방법을 앙상블 방법이라 합니다.  

이러한 앙상블의 예로는 배깅(Bagging, Bootstrap Aggregating), 랜덤 포레스트 (Random Forest), 부스팅(Boosting), 스태킹(Stacking, Stacked Generalization) 등이 있습니다.  

먼저 배깅은 같은 모델이지만 훈련 데이터셋의 서브셋을 무작위로 구성하여 모델을 각기 다 르게 학습시키는 방법입니다. 이때 훈련 세트에서 중복을 허용하여 샘플링하는데 이를 부트 스트랩(Bootstrap)이라 하기 때문에 Bootstrap Aggregating, 줄여서 Bagging이라고 합니다.  
  
랜덤 포레스트는 이 배깅을 적용한 Decision Tree의 앙상블 모델입니다. 여러개의 Decision Tree를 생성하여 각 개별 트리의 예측값들 중 가장 많은 선택을 받은 클래스로 예측하는 방법입니다.  

부스팅은 배깅의 변형으로 여러개의 모델들을 순서대로 이전 모델들이 예측하지 못한 Error 에 가중치를 부여하여 보완해가면서 전체 모델을 학습해가는 방법입니다. 보완하는 방법에 따라 Ada Boost, Gradient Boost(GBM), XGBoost, LGBM(Light GBM)  

스태킹은 앙상블에 속한 모델들의 예측을 '다수결'같은 간단한 방법으로 취합하는 대신 취합 하는 모델을 훈련시키는 방법입니다. 여러 모델들의 예측값을 취합하는 마지막 학습기를 블 렌더(Blender), 메타 학습기(Meta Learner)라고 합니다. 이 블렌더를 학습시키기 위해 훈 련 데이터를 두 개의 서브셋으로 나누어 첫 번째 서브셋을 이용해 앙상블에 속한 모델들을 훈 련시키고 두 번째 서브셋에 대한 예측을 얻습니다. 그러면 훈련 데이터의 타깃값과 이 예측들 을 입력으로 하는 새로운 훈련세트를 만들어 블렌더를 학습시킬 수 있습니다.
