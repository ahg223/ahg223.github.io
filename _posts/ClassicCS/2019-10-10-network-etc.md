---
title : OSI 7 - Network Layer
excerpt : Detail - ARP, RARP, NAT, ICMP / IGMP, IPsec

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

## IPsec (Internet Protocol Security)

보안에 취약한 구조를 가진 IP의 보안을 위하여 국제 인터넷 기술 위원회(IETF)에서 설계한 표준(RFC2401)입니다. IPv4에선 보안이 필요한 경우에만 선택적으로 사용하였지만 IPv6부턴 기본 스펙에 포함됩니다.

전송계층 아래에서 구현되며, 운영체제에서 IPsec을 지원함. 네트워크계층(IP 계층) 상에서 IP 패킷 단위로 인증,암호화,키관리 VPN을 구현하기 위한 프로토콜입니다. 

키관리를 통해 캡슐화 및 디캡슐화를 진행합니다.

### 보안구조

#### 인증 헤더(Authentication Header, AH)

* 메세지 인증 코드(MAC)를 이용하여 무결성과 인증을 제공
* 암호화는 제공되지 않음

#### 보안 페이로드 캡슐화 (Encapsulating Security Payload, ESP)

* AH가 가진 무결성과 인증을 제공하며, 추가적으로 대칭키 암호화를 이용하여 기밀성 제공


#### 보안 연관 (Security Association, SA)

* 데이터의 안전한 전달을 위해 통신의 쌍방 간의 약속
* 암호 알고리즘, 키 교환 방법, 암호화 키 교환 주기 등에 대한 합의


### 터널모드 / 전송모드

#### 터널모드

> AH

![](https://user-images.githubusercontent.com/44635266/66538015-9ffaa400-eb5d-11e9-9227-6d3d14295169.png)

> ESP

![](https://user-images.githubusercontent.com/44635266/66538016-9ffaa400-eb5d-11e9-9ec9-1b778adb4961.png)

IP 패킷 전체를 보호한다. 암호화된 패킷에 IPSec 헤더를 추가하여 라우팅을 수행한다. IPSec 헤더는 구간 간 이동에 대한 정보만 있으므로 종단 정보(출발지, 목적지)와 트래픽 경로는 보호된다.

일반적으로 터널/보안 게이트웨이 구간 또는 종단 노드와 터널/보안 게이트웨이 구간의 IP 패킷 보호를 위해 사용한다.

#### 전송모드

> AH 

![](https://user-images.githubusercontent.com/44635266/66538017-a0933a80-eb5d-11e9-83cc-d7256ab9884e.png)


> ESP 

![](https://user-images.githubusercontent.com/44635266/66538018-a0933a80-eb5d-11e9-989b-532af4473f08.png)

IP 패킷 전체를 보호하는것이 아니라 IP 헤더를 제외한 IP 패킷의 페이로드(Payload)만 보호한다. IP 헤더는 암호화하지 않으므로 트래픽 경로는 노출됩니다.

일반적으로 End Node구간의 IP 패킷 보호를 위해 사용된다.

