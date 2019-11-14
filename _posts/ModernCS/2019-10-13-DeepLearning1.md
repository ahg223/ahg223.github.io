---
title: "Deep Learning"
excerpt: ""

categories:
  - ModernCS
tags:
  - ModernCS
  - DeepLearning
---

1. 딥러닝은 무엇인가요? 딥러닝과 머신러닝의 차이는?
머신러닝 : 기계가 직접 데이터를 학습함으로써 그 속에 숨겨진 일련된 규칙성(패턴)을 찾는
것
"만약 컴퓨터 프로그램이 특정한 테스크 T를 수행할 때 성능 P만큼 개선되는 경험 E를 보이 면 그 컴퓨터 프로그램은 테스크 T와 성능 P에 대해 경험 E를 학습했다고 할 수 있다. - Tom Mitchell"
딥러닝 : 컴퓨터가 스스로 학습할 수 있게 하기 위해 인공신경망(ANN, Artificial Neural Network)을 기반으로 하는 기계학습.
딥러닝 vs 머신러닝 : 딥러닝이 데이터 특징을 사람이 추출하지 않으며, 주로 데이터 의존도 및 하드웨어 의존도가 높다.
데이터 특징을 사람이 추출하지 않는다. == 머신러닝에서는 feature를 사람이 구분해 줘야한다. ex) 동물 구분시 수염이 있는지, 귀 모양이 어떤지, 얼굴형이 동그란지, 삼각 형인지 등
데이터 의존도가 높다. == 딥러닝은 직접 특징을 추출하기 위해서 매우 큰 데이터가 필 요하다. 만약, 데이터 양이 적다면 머신러닝이 더 높은 성능을 보일 수 있다.
하드웨어 의존도가 높다. == 딥러닝 알고리즘 요구사항(requirements)는 GPU 포함(많 은 양의 행렬곱이 필요)
2. 왜 갑자기 딥러닝이 부흥했을까요?
1. 인공신경망 모델의 단점 - overfit이 극복되었다.
2004년 RBM(Restricted Boltzmann Machine) 알고리즘 2013년 Drop-out 개념
2. 하드웨어의 발전
강력한 GPU(Graphics Processing Unit)가 몇 주 걸리던 계산 과정을 몇 시간으로 줄이는 등 의 성능을 보임
   
  3. 빅데이터
딥러닝은 기본적으로 데이터 양이 많아야 가능하다. 이 기본 요건을 채울 수 있는 것, 막대한
양의 데이터 분석능력을 적용하여 가공/재생산 하고 이것을 학습에 이용 3. 마지막으로 읽은 논문은 무엇인가요? 설명해주세요
각자 진행하시면 됩니다.
4. Cost Function과 Activation Function은 무엇인가요?
cost funcion : 모델이 예측하는 값과 실제 값 사이의 오차를 측정하는 것
학습할 경우 비용(cost)이 최소가 되는 방향으로 진행이 되며, 이 방법을 optimization이라고
한다.
activation function : 활성함수, 어떤 입력을 받았을 때 이것을 활성시킬지, 비활성시킬지 정
하는 함수
ex 입력이 1이 들어온다면 비활성, 3이 들어오면 활성 이때 어떤 기준인가?
Linear, sigmoid(logistic), softmax, relu 등
5. Tensorflow, Keras, PyTorch, Caffe, Mxnet 중 선호하는 프레임워크와 그 이유는 무엇인가요?
  TensoFlow :
플랫폼
Linux, Mac, Windows
모바일 언어
Android, C++, iOS Python
인터페이스
python, C/C++, Java, Go
               CUDA 멀티GPU NYYY
OpenMP
분산
     장점
단점
Define-and-Run 모델 / 런타임에 그래프 변경 안됨
추상화된 그래프 모델
학습 디버깅을 위한 시각화 도구 TensorBoard 제공 모바일 지원
low-level / high-level API 모두 제공
방대한 사용자 커뮤니티
Torch에 비해 느림 Keras
Linux, Mac, python windows
python
Y(Theano), Y N(TF)
      플랫폼 언어 인터페이 OpenMP 멀티
스
GPU
      장점

  직관적인 API 인터페이스
caffe, Torch, TensorFlow 등 다양한 딥러닝 프레임워크 모델 import 기능 제 공
단점
기반 Theano 프레임워크에서 문제 발생시 debugging 어려움
PyTorch
Torch용 Python API
장점
python 라이브러리(numy, scipy, Cython)와 높은 호환성 Caffe
자연어 처리와 같은 애플리케이션을 위해 사용
GPU 사용으로 속도 빠름
사전 학습된 모델이 많이 존재
Define-by-Run 모델. 코드를 직접 돌리는환경인 세션을 만들고, placeholder를 선언, 이것으로 계산 그래프를 만들고(Define), 코드를 실행 하는 시점에 데이터를 넣어 실행(Run)하는 방식.
       플랫폼 언 인터페이스 OpenMP CUDA 멀티
어
GPU
      Linux, c++ python, Y Mac MATLAB
장점
단점
유연하지 못한 API Mxnet
Y Y
 이미지 처리 특화
프로그래밍 대신 설정파일로 학습 파일 정의
caffe Model Zoo를 통한 다양한 Pre-trained Model 제공 이미지 기반 참조 모델의 de facto standard
이미지 이외의 텍스트, 사운드 등의 데이터 처리에 부적합
     플랫폼 모바일 언어 인터페이스
 Linux, Mac, Windows, Javascript
  Android, iOS
   c++
 C++, python, Julia, MATLAB, JavaScript, Go, R, Scala, Perl
     OpenMP CUDA 멀티GPU YYYY
장점
분산
     다양한 프로그래밍 인터페이스 제공 모바일 지원
빠르게 발전
low-level, high-level API 모두 제공

 Imperative / Graph 프로그래밍 모델 모두 지원 단점
다소 처리 속도 느림
