---
title: "Deep Learning"
excerpt: "Data Normalization, Activation Function, hyperparameter, Weight Initialization"

categories:
  - ModernCS
tags:
  - ModernCS
  - DeepLearning
---

## Data Normalization
Data Normalization : 데이터의 범위를 사용자가 원하는 범위로 제한하는 것. 주로 데 이터의 값을 0.0 ~ 1.0 사이의 값으로 변환한다. 데이터 값들 중 최댓값, 최솟값이 필요하다.
정규화 된 값=(정규화 하고자하는 값 - 최솟값)/(최댓값 - 최솟값)
왜 필요한가? : 학습을 빨리 하고, Local optimum에 빠지는 가능성을 줄인다.
 <img width="499" alt="스크린샷 2019-11-14 오후 10 15 34" src="https://user-images.githubusercontent.com/34998051/68860159-48d38a80-072c-11ea-8b82-7645c52eda98.png">
 
## Activation Function - Sigmoid, ReLU, LeakyReLU, Tanh 
* Linear
    * 입력 그대로 출력이 나간다. 
* Sigmoid (=Logistic)
    * 질문에 대한 답이 Yes일 확률을 계산하는 확률 분포 함수. 0~1 사이의 값을 출력 
    * 2개의 카테고리를 예측할 때 output layer에서 사용
    <img width="499" alt="스크린샷 2019-11-14 오후 10 16 08" src="https://user-images.githubusercontent.com/34998051/68860195-5d178780-072c-11ea-9ba6-313265e41162.png">  
  
* Softmax
    * Logistic function을 일반화 한 것
    * n 개의 요소를 갖는 확률벡터 : 각 요소의 합이 0~1 사이이고 전체 합이 1
    * n 개의 카테고리를 예측할 때 output layer에서 사용
* Hyper tangen (tanh)
    * -1~1 사이의 값을 출력
    * feature 값의 범위를 줄여주는 역할로 주로 hidden layer에서 사용 
* ReLU(Rectified Linear Unit)
    * 입력 < 0 이면 0, 입력 > 0 이면 Linear 처럼 동작. 
    * Sigmoid나 tanh 보다 학습속도가 빠르다.
    <img width="499" alt="스크린샷 2019-11-14 오후 10 17 34" src="https://user-images.githubusercontent.com/34998051/68860273-905a1680-072c-11ea-92ff-7344ab29ccac.png">
 
* kyReLU
    * 입력 < 0 이면 입력 * alpha, 입력 > 0 이면 Linear 처럼 동작 
    * 음수값을 0으로 정의하는 대신, 입력의 작은 선형 조합으로 정의한다.
    <img width="499" alt="스크린샷 2019-11-14 오후 10 18 42" src="https://user-images.githubusercontent.com/34998051/68860359-b8e21080-072c-11ea-94f8-fdd85891fd76.png">  

Leak 경우 대처

오버피팅 : 너무 많은 feature를 반영하여 학습. high variance 된 경우.
새로운 데이터를 너무 예측하지 못할 경우, 오버피팅 되었다고 생각할 수 있다. 
대처방법
1. validation set을 갖추고 k-fold cross validation을 사용하여 train set과 비교. accuracy가 낮다면 train 방법을 바꾸어 학습을 해야한다. regularization(정규화)를 반복해서 시행.
2. regularization를 계속 반복
<img width="499" alt="스크린샷 2019-11-14 오후 10 20 05" src="https://user-images.githubusercontent.com/34998051/68860464-e9c24580-072c-11ea-883e-ac109435fd04.png">  
 overfitting 된 경우 그래프가 울퉁불퉁해짐. variance를 낮추면 smooth 한 그래프가 된다.

3. 조기종료(early stopping) : epoch 기준에서 얼마만큼 epoch이 증가해도 더 이상
validation accuracy가 올라가지 않을 때 stop 시키는 것.
4. 예방 방법에는 사전에 cost fuction의 regression 문제 변형을 주거나, dropout을 적용
하는 방법이 있다.

## 하이퍼 파라미터
hyperparameter : 신경망 학습을 통해서 튜닝 또는 최적해 해야 하는 주 변수가 아니 라, 학습 진도율이나 일반화 변수처럼 사람들이 선험적 지식으로(priori) 설정하거나 외 부 모델 메커니즘을 통해 자동으로 설정되는 변수
learning rate, cost function, regularization parameter, mini-bach 크기, train 반복 횟수, hidden unit 개수, 가중치 초기화(Weight Initialization) 등이 여기에 포함된다.

## Weight Initialization 방법
### weight initialization
초기 가중치 설정. 잘못 설정할 경우, 기울기 소실 문제나 표현력 의 한계를 갖는 등 문제를 야기하게 된다. 또한 잘못 설정할 경우 local minimum에 수 렴할 가능성이 커지게 된다.  

같은 모델이어도 초기화를 잘 하면 성능이 더 좋아진다.  

activation function으로 sigmoid나 tanh를 사용할 경우에는 xavior initialization을 사
용하면 더 좋다.  

ReLU를 사용할 경우에는 He 초기값을 사용하면 고르게 분포된다.  
### He initialization
### xavier initialization

<img width="499" alt="스크린샷 2019-11-14 오후 10 22 56" src="https://user-images.githubusercontent.com/34998051/68860660-4faecd00-072d-11ea-9bb6-f322fca0db4a.png">
