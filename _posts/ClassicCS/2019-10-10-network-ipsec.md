---
title : OSI 7 - Network Layer
excerpt : Detail - IPsec

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Network
---


## IPsec (Internet Protocol Security)

보안에 취약한 구조를 가진 IP의 보안을 위하여 국제 인터넷 기술 위원회(IETF)에서 설계한 표준(RFC2401)이다. IPv4에선 보안이 필요한 경우에만 선택적으로 사용하였지만 IPv6부턴 기본 스펙이다.

전송계층 아래에서 구현되며, 운영체제에서 IPsec을 지원. 네트워크계층(IP 계층) 상에서 IP 패킷 단위로 인증, 암호화, 키관리 VPN을 구현하기 위한 프로토콜이다.  

키관리를 통해 캡슐화 및 디캡슐화를 진행한다.  

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

IP 패킷 전체를 보호하는것이 아니라 IP 헤더를 제외한 IP 패킷의 페이로드(Payload)만 보호한다. IP 헤더는 암호화하지 않으므로 트래픽 경로는 노출된다.

일반적으로 End Node구간의 IP 패킷 보호를 위해 사용된다.
