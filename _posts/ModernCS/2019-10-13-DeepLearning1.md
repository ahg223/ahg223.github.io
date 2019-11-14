---
title: "Deep Learning"
excerpt: "Deep vs ML, cost function, activation function, Tensorflow, Keras, PyTorch, Caffe, Mxnet"

categories:
  - ModernCS
tags:
  - ModernCS
  - DeepLearning
---

## 딥러닝과 머신러닝의 차이
머신러닝 : 기계가 직접 데이터를 학습함으로써 그 속에 숨겨진 일련된 규칙성(패턴)을 찾는 것  
"만약 컴퓨터 프로그램이 특정한 테스크 T를 수행할 때 성능 P만큼 개선되는 경험 E를 보이 면 그 컴퓨터 프로그램은 테스크 T와 성능 P에 대해 경험 E를 학습했다고 할 수 있다. - Tom Mitchell"  
딥러닝 : 컴퓨터가 스스로 학습할 수 있게 하기 위해 인공신경망(ANN, Artificial Neural Network)을 기반으로 하는 기계학습.  
딥러닝 vs 머신러닝 : 딥러닝이 데이터 특징을 사람이 추출하지 않으며, 주로 데이터 의존도 및 하드웨어 의존도가 높다.  
데이터 특징을 사람이 추출하지 않는다. == 머신러닝에서는 feature를 사람이 구분해 줘야한다. ex) 동물 구분시 수염이 있는지, 귀 모양이 어떤지, 얼굴형이 동그란지, 삼각 형인지 등  
데이터 의존도가 높다. == 딥러닝은 직접 특징을 추출하기 위해서 매우 큰 데이터가 필 요하다. 만약, 데이터 양이 적다면 머신러닝이 더 높은 성능을 보일 수 있다.  
하드웨어 의존도가 높다. == 딥러닝 알고리즘 요구사항(requirements)는 GPU 포함(많 은 양의 행렬곱이 필요)  

## 딥러닝 부흥
* 인공신경망 모델의 단점 - overfit이 극복되었다.
    * 2004년 RBM(Restricted Boltzmann Machine) 알고리즘 2013년 Drop-out 개념
* 하드웨어의 발전
    * 강력한 GPU(Graphics Processing Unit) 성능
* 빅데이터
    * 딥러닝은 기본적으로 데이터 양이 많아야 가능하다. 이 기본 요건을 채울 수 있는 것, 막대한
양의 데이터 분석능력을 적용하여 가공/재생산 하고 이것을 학습에 이용 

## Cost Function과 Activation Function
### cost funcion
모델이 예측하는 값과 실제 값 사이의 오차를 측정하는 것  
학습할 경우 비용(cost)이 최소가 되는 방향으로 진행이 되며, 이 방법을 optimization라 한다.

### activation function
활성함수, 어떤 입력을 받았을 때 이것을 활성시킬지, 비활성시킬지 정하는 함수  

ex 입력이 1이 들어온다면 비활성, 3이 들어오면 활성 이때 어떤 기준인가?
Linear, sigmoid(logistic), softmax, relu 등

## Tensorflow, Keras, PyTorch, Caffe, Mxnet


<img width="499" alt="스크린샷 2019-11-14 오후 10 08 36" src="https://user-images.githubusercontent.com/34998051/68859748-4fadcd80-072b-11ea-988a-62991627f2fb.png">  
<img width="499" alt="스크린샷 2019-11-14 오후 10 08 50" src="https://user-images.githubusercontent.com/34998051/68859756-58060880-072b-11ea-9f8a-417059f1a923.png">  
<img width="499" alt="스크린샷 2019-11-14 오후 10 09 09" src="https://user-images.githubusercontent.com/34998051/68859782-63593400-072b-11ea-9284-3776d8e151f8.png">  
<img width="499" alt="스크린샷 2019-11-14 오후 10 09 40" src="https://user-images.githubusercontent.com/34998051/68859820-75d36d80-072b-11ea-8dde-af04c18795d3.png">  

