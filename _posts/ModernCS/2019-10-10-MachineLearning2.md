---
title: "Machine Learning"
excerpt: "차원의 저주, dimension reduction, PCA, LSA, LDA, SVD"

categories:
  - ModernCS
tags:
  - ModernCS
  - MachineLearning
---

## 차원의 저주
데이터의 차원(dimensionality)이 증가할수록 해당 공간의 크기(부피)가 기하급수적으로 증 가하기 때문에 동일한 개수의 데이터의 밀도는 차원이 증가할수록 급속도로 희박(sparse)해 진다. 따라서, 차원이 증가할수록 데이터의 분포 분석 또는 모델추정에 필요한 샘플 데이터의 개수가 기하급수적으로 증가하게 되는데 이러한 어려움을 표현한 용어가 '차원의 저주'이다.

## dimension reduction기법
-영상처리할 때 이미지픽셀들로는 피쳐가 너무많음-> 영상처리 feature selection 기법들..
SIFT, HOG, Haar, Ferns, LBP, MCT등등..
PCA(Principal Component Analysis): 데이터 공간에서 분포의 주 성분을 분석해 주는
방법, 주성분이라 함은 그 방향으로 데이터들의 분산이 가장 큰 방향벡터를 의미한다.


## PCA - 차원 축소 기법, 데이터 압축 기법, 노이즈 제거 기법
1. 데이터 공간에서 분포에대한 분산이가장 크게되는 방향벡터 찾기(각데이터와 내적한 값의 분산)
2. 1에서찾은 벡터에 수직이면서 분산이 가장 큰 벡터 찾기
     
 3. 1,2에서 찾은 벡터에 수직이면서분산이 가장 큰 벡터 찾기
4. ... 데이터 공간의 차원수만큼 진행 ->먼저 찾은 벡터일수록 유의미함, 후반부의 데이터
분산이 가장 적은벡터 노이즈로 추정(노이즈제거)
5. 전반부에 찾아낸 서로수직인벡터들을 basis로 하는 새로운 공간 형성(차원축소) ->위에
서 진행한알고리즘으로 가장 의미없는 피쳐 제거 가능(차원 축소, 데이터 압축, 노이즈 제거)


## LSA, LDA, SVD 등
LSA : Latent Semantic Analysis 잠재의미분석 / 입력 데이터에 특이값 분해를 수행해 데이 터의 차원수를 줄여, 계산 효율성을 키우는 한편 행간에 숨어 있는 (latent)의미를 이끌어내기 위한 방법론 LDA : Linear Discriminant Analysis 선형 판별 분석 / 데이터 분포를 학습해 결 정경계(Decision boundary)를 만들어 데이터를 분류(classification)하는 모델 SVD : Singular Value Decomposition 특이값 분해 / A=UΣVT 행렬분해 후, 가운데 단위행렬 축소..
