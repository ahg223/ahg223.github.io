---
title : OSI 7 - Network Layer
excerpt : Detail - ARP, RARP, NAT, ICMP / IGMP 

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Network
---

## ARP  / RARP

![ARP/RARP](https://user-images.githubusercontent.com/44635266/66535265-04b10100-eb54-11e9-9093-069bbbc3d5f2.png)

### ARP(주소 결정 프로토콜, Address Resolution Protocol)

논리적인 IP주소를 물리적인 MAC주소로 바꾸어 주는 역할을 하는 주소 해석 프로토콜이다. 3계층 프로토콜이지만 ip하위에서 동작하는 2.5계층 프로토콜이라고도 말한다.  
RARP는 ARP의 반대로 물리적인 MAC주소를 논리적인 IP주소로 알아낼 때 사용한다

> ARP 구조

![](https://user-images.githubusercontent.com/44635266/66535338-3de97100-eb54-11e9-8b25-308f9ffadad2.png)

### 동작방식

![](https://user-images.githubusercontent.com/44635266/66535634-2a8ad580-eb55-11e9-8374-70e65dcaa5f9.png)

1. 송신자는 목적지 IP주소는 알고 있으나, 물리주소는 모름

2. 물리주소를 알아내기 위해 ARP 요청 메시지 생성
ARP 요청 메시지 (송신자 물리주소, 송신자 IP주소, 00-00-00-00-00, 수신자 IP주소)

3. 요청메시지를 데이터링크 계층으로 전달, 프레임 생성
송신자 물리주소를 발신지 주소, 수신자 물리주소를 브로드캐스트 주소로 지정

4. 모든 호스트나 라우터는 이 프레임을 수신하여 자신의 ARP로 전달

5. 요청 메시지에 해당되는 호스트나 라우터만 ARP응답 메시지 생성
자신의 물리주소를 포함하는 응답 메시지

6. ARP 응답메시지를 유니캐스트로 ARP 요청 메시지를 보낸 송신자에게 전송
유니캐스트를 이용하는 이유는 송신자가 요청메시지에 물리주소를 포함했기 때문

7. 송신자는 ARP 응답메시지를 받고 목적지 물리주소를 획득
 
8. 목적지에게 전송할 IP데이터그램을 획득한 물리주소를 이용해 프레임으로 캡슐화

9. 캡슐화된 프레임을 유니캐스트로 목적지로 전송

## NAT (네트워크 주소 변환, Network Address Translation)

내부가 사설 IP로 구축이 될때 문제저은 사설 IP는 라우팅이 되지 않는 것이다.  
이러한 문제를 해결하기 위한 것이 바로 NAT이다.  

![stati1c](https://user-images.githubusercontent.com/44635266/66758072-86988580-eed8-11e9-9c9e-36f75e10b98a.png)

위 그림과 같이 NAT는 사설 IP를 공인 IP로 변경한다. 쉽게 설명하면 전송되는 패킷의 IP 정보를 변경하는 기술이다.  
포트 포워딩과 비슷해 보일 수 있지만, 자의로 포트를 정하는 것이 아니라는 점과 쓰이는 목적이 다르다는 것이 차이점이다.

### 기능

* 공인 IP의 부족 문제를 해결

* 외부로부터 내부망을 보호
 
* ISP 변경에 따른 내부 IP 변경 최소화

## ICMP / IGMP

### ICMP(인터넷 제어 메시지 프로토콜, Internet Control Message Protocol)

![](https://user-images.githubusercontent.com/44635266/66715708-6b0e7b80-ee01-11e9-905a-6abdb88fa4c7.png)

네트워크 하드웨어의 운영체제에서 오류 메시지(Requested service is not available 등)를 전송받는 데 주로 쓰이며 인터넷 프로토콜의 주요 구성원 중 하나로 인터넷 프로토콜에 의존하여 작업을 수행한다.

ICMP 메시지들은 일반적으로 IP 동작(RFC 1122에 규정)에서 진단이나 제어로 사용되거나 오류에 대한 응답으로 만들어진다. ICMP 오류들은 원래 패킷의 소스 IP 주소로 보내지게 된다.

### IGMP(인터넷 그룹 관리 프로토콜, (Internet Group Management Protocol)

![](https://user-images.githubusercontent.com/44635266/66715759-fab42a00-ee01-11e9-9ca8-9346f9f021c2.png)

IGMP는 호스트가 멀티캐스트 그룹 구성원을 인접한 스위치 및 라우터로 알리는 수단이 되는 프로토콜이다. TCP/IP 프로토콜 집합이 동적 멀티캐스팅을 수행하기 위해 사용하는 표준 프로토콜이다.

서브넷(로컬 네트워크) 상의 멀티캐스팅 멤버십 제어(그룹 관리)를 위한 프로토콜이다. 즉, 하나의 라우터와 여러 호스트로 구성되는 서브 네트워크(Sub-Network) 상에서 각각의 멀티캐스트 그룹에 속하는 호스팅 목록을 라우터가 알도록 하는 그룹 관리 신호프로토콜(Signaling Protocol)역할을 한다.

### 기타 기능 

#### IGMP Snooping

라우터와 호스트 사이에 있는 스위치가 IGMP 메세지들을 들을 수 있게 하는 기능

#### IGMP Querier Election

동일 LAN에 여러 멀티캐스트 라우터가 있으면, IPv4 주소 중 가장 낮은 주소를 갖는 라우터가 Querier 역할을 집중하게 함

