---
title : OSI 7 - Network Layer
excerpt : Detail - IP, Routing

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Network
---

## 네트워크 계층(Network Layer)

네트워크 계층(영어: network layer)은 컴퓨터 네트워킹의 7계층 OSI 모형 가운데 제3계층이다. 네트워크 계층은 중간 라우터를 통한 라우팅을 포함하여 패킷 포워딩을 담당한다.


## IP (인터넷 프로토콜,  Internet Protocol address)

> IP 패킷 구조

![IP패킷](https://user-images.githubusercontent.com/44635266/66534563-89e6e680-eb51-11e9-9c99-2c5f6af5f8c4.png)

컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 특수한 번호이다. 네트워크에 연결된 장치가 라우터이든 일반 서버이든, 모든 기계는 이 특수한 번호를 가지고 있어야 한다.  

오늘날 주로 사용되고 있는 IP 주소는 IP 버전 4(IPv4) 주소이나 이 주소가 부족해짐에 따라 길이를 늘린 IP 버전 6(IPv6) 주소가 사용되는 추세이다.  

> IPv4 Example

```
211.214.14.153
```

> IPv6 Example

아래는 전부 같은 주소다.

```
2001:0DB8:0000:0000:0000:0000:1428:57ab
2001:0DB8:0000:0000:0000::1428:57ab
2001:0DB8:0:0:0:0:1428:57ab
2001:0DB8:0::0:1428:57ab
2001:0DB8::1428:57ab
```

### IPv4

IPv4의 주소체계는 총 12자리이며 네 부분으로 나뉜다. 각 부분은 0~255까지 3자리의 수로 표현된다. 총 32bit로 구성이 되어있다.

> 구성단위

![IP 클래스](https://user-images.githubusercontent.com/44635266/66534836-7b4cff00-eb52-11e9-8b24-3bb268767671.png)

> 특수 용도 주소

![IP 특수용도주소](https://user-images.githubusercontent.com/44635266/66534883-9d468180-eb52-11e9-95ac-5b896c45be06.png)

### 사설 네트워크 주소

IPv4의 주소 부족을 지연시킬 목적으로 정의됨. 사설주소가 할당된 컴퓨터는 인터넷에 직접적으로 액세스 할 수 없다.

##  서브넷 (Subnet)

부분망(Subnetwork) 또는 부분망 마스크(IP Subnet Mask, IP 서브넷 마스크), IP 서브넷은 인터넷 프로토콜 스위트의 가시적인 부분이다.

서브넷은 브로드캐스트 영역을 나누고 IP를 아끼기 위해 사용된다. 

B클래스 기준 `150.150.0.0`의 브로드캐스트 호스트 주소는 약 6만개가 되는데 서브넷으로 나누어 `150.150.1.0`과 `150.150.2.0`으로 나누게 되면 255개로 줄어들게된다. 나눠진 서브넷은 라우터를 통하여 통신하게 된다.

### 디폴트 서브넷 마스크

* A 클래스의 디폴트 서브넷 마스크 `255.0.0.0`
* B 클래스의 디폴트 서브넷 마스크 `255.255.0.0`
* C 클래스의 디폴트 서브넷 마스크 `255.255.255.0`

### 변형된 서브넷 마스크

![](https://user-images.githubusercontent.com/44635266/66755241-8bf2d180-eed2-11e9-828d-05039f86ce46.png)


IP주소는 IP 클래스에 의해 분리되는 Network Prefix와 나머지 Host Number로 분리된다. 서브넷 마스크에 의해 이루어지는 서브넷팅은 이 Host Number를 Subnet Number와 서브넷안에서 식별되는 Host Number로 다시 분리한다.

### IPv4 서브넷 구하기

부분망을 구하는 과정은 한 주소의 네트워크 및 부분망 부분과 호스트 식별자를 구분하는 일을 포함한다. 이는 IP 주소 및 (부분)망 마스크 간 AND 비트 연산을 통해 수행한다. 이를 통해 네트워크 주소나 접두사(prefix)가 만들어지며 나머지는 호스트 식별자가 된다.

다음은 192.168.5.130이라는 주소와 이와 연계된 /24 네트워크 마스크 (255.255.255.0)으로부터 네트워크 접두사와 호스트 식별자를 구분하는 예이다. 이 연산은 이진 주소 형식을 사용하여 아래의 표로 나타나 있다.

![](https://user-images.githubusercontent.com/44635266/66756338-c65d6e00-eed4-11e9-8824-e83dfe458b25.png)

### IP주소 / 서브넷 마스크 / 네트워크 주소

![](https://user-images.githubusercontent.com/44635266/66756339-c65d6e00-eed4-11e9-8b1c-b6eb9e0db330.png)

### 서브넷과 브로드캐스트 주소 / 호스트 수 

![](https://user-images.githubusercontent.com/44635266/66756342-c6f60480-eed4-11e9-83b7-00b62a1df03f.png)

![](https://user-images.githubusercontent.com/44635266/66756353-cf4e3f80-eed4-11e9-800a-73924ab9f74c.png)

### 직접전달 / 간접전달

<img width="526" alt="스크린샷 2019-10-08 오후 9 48 54" src="https://user-images.githubusercontent.com/44635266/66396792-76366580-ea15-11e9-8a15-5e0fd9188462.png">

패킷의 목적지가 전달자와 같은 네트워크에 있는 경우를 직접전달이라 한다.

즉, 패킷을 전달하려는 사람과 목적지가 같은 경우 직접 전달이다.

<img width="601" alt="스크린샷 2019-10-08 오후 9 48 58" src="https://user-images.githubusercontent.com/44635266/66396794-76366580-ea15-11e9-95ad-556e5220a306.png">

송신자와 수신자가 다른 네트워크에 있으면 간접 전달을 한다.
수신자는 라우터의 IP주소를 알아내야지 라우터의 물리주소를 알아낼 수 있다.  
수신자는 라우팅 테이블을 이용하여 이를 찾아낸다.  

목적지 IP주소를 주면, 라우팅 테이블에서 라우터의 IP주소를 알 수 있다. 그리고 IP주소를 알아내면 내부 메모리 또는 ARP를 이용하여 물리주소를 알아낼 수 있다.  

## Routing

Routing이란 패킷(Packet)을 전송하기 위한 수많은 경로 중에서 한 가지 경로를 결정하는 것이다.

라우팅에는 동적 라우팅(Dynamic Routing)과 정적 라우팅(Static Routing)으로 나누는데 정적 라우팅은 수동으로 미리 경로를 지정하는 방식이고, 동적 라우팅은 변화하는 상황에 맞추어 라우터가 경로를 재설정하는 방식이다.

Routing Table의 업데이트는 서로의 라우트 테이블을 공유하면서 이루어진다.

### Routing Table Format

1) Routing Table
- 패킷을 목적지로 라우팅 할 때 참조하는 테이블
- 목적지 주소, Output I/F, Metric 값

2) Message
- 라우터 간 라우팅을 위해 교환하는 메세지
- 이웃 도달 메세지, 라우팅 정보

3) Metric
- 라우팅 테이블 생성 및 업데이트 시 최적의 경로를 결정하는 기술
- 경로 길이, 홉(Hop) 수, 대역폭, 비용, 신뢰성


> Example 1 - R1

![](https://user-images.githubusercontent.com/44635266/66773641-6f6a8f80-eefa-11e9-99d6-31644a00f388.png)

> Routing Table Result

![](https://user-images.githubusercontent.com/44635266/66773642-6f6a8f80-eefa-11e9-845b-0807a43f9236.png)

> Example 2 - R1

![](https://user-images.githubusercontent.com/44635266/66773643-6f6a8f80-eefa-11e9-851d-e6b2f820d2e3.png)

> Routing Table Result

![](https://user-images.githubusercontent.com/44635266/66773644-70032600-eefa-11e9-9431-e752696ca848.png)

## Routing Protocol

![](https://user-images.githubusercontent.com/44635266/66770926-c6209b00-eef3-11e9-923a-9b1eb804ff61.png)


### Static / Dynamic

### Static Routing Protocol

- 수동식, 사람이 일일이 경로를 입력, 라우터 부하경감, 고속 라우팅 가능

- 관리자의 관리부담 증가 및 정해진 경로 문제 발생시 라우팅 불가능


### Dynamic Routing Protocol

- 라우터가 스스로 라우팅 경로를 동적으로 결정

- RIP, IGRP, OSPF, EIGRP

### Interior / Exterior
<img width="492" alt="스크린샷 2019-11-11 오후 7 38 04" src="https://user-images.githubusercontent.com/34998051/68580954-c8f2b980-04ba-11ea-977c-7e706dddc8d5.png">

### Interior Gateway Protocol

- AS 내에서의 라우팅을 담당하는 라우팅 프로토콜
- AS란 Autonomous System으로 라우팅을 위해 자율적으로 관리 할 수 있는 네트워크 그룹과 게이트웨이를 뜻한다

- RIP, IGRP, OSPF, EIGRP

### Exterior Gateway Protocol	

- 서로 다른 AS사이에서 사용되는 라우팅 프로토콜

- BGP, EGP

### Distance Vector / Link State

### Distance Vector Algorithm

- 라우팅 Table에 목적지까지 가는데 필요한 거리와 방향만을 기록 (인접 라우터)

- RIP, IGRP

### Link State Algorithm

- 라우터가 목적지까지 가는 경로를 SPF(Shortest Path First) 알고리즘을 통해 모든 라우팅 테이블에 기록해 두는 것 (모든 라우터)

- OSPF

> 주요 프로토콜 비교

![](https://user-images.githubusercontent.com/44635266/66771981-92934000-eef6-11e9-870b-49112620efd4.png)

