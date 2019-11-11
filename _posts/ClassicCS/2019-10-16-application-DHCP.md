---
title : OSI 7 - Application Layer
excerpt : Detail - DHCP 개념

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Network
---  

## DHCP (동적 호스트 구성 프로토콜, Dynamic Host Configuration Protocol)

![](https://user-images.githubusercontent.com/44635266/66919769-f2a3f680-f05c-11e9-861d-032992674b72.png)

쉽게 말해 가정에서 흔히 볼 수 있는 공유기다.  

동적 호스트 구성 프로토콜(Dynamic Host Configuration Protocol, DHCP)은 호스트 IP 구성 관리를 단순화하는 IP 표준이다. 동적 호스트 구성 프로토콜 표준에서는 DHCP 서버를 사용하여 IP 주소 및 관련된 기타 구성 세부 정보를 네트워크의 DHCP 사용 클라이언트에게 동적으로 할당하는 방법을 제공한다.  

백문불여일견이다. 직접 DHCP를 확인해 보자.   

#### 데스크탑
![](https://user-images.githubusercontent.com/44635266/66919771-f2a3f680-f05c-11e9-9a51-e1fdc0b7f7d7.png)

#### 노트북
> 작업중인 `ifconfig`
```
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	ether a4:83:e7:21:99:fe
	inet6 fe80::46c:3ecd:9e93:9f7a%en0 prefixlen 64 secured scopeid 0xa
	inet 192.168.35.132 netmask 0xffffff00 broadcast 192.168.35.255
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
```

노트북에 ip는 `192.168.35.132`이고 데스크탑은 `192.168.35.75` 이다. 자세히 보면 `ether` 뒤에 MAC 주소가 일치하는데, 데스크탑과 노트북을 연결한 상태라 하나의 NIC가 같아서 그렇다.

### 특징

* PC의 수가 많거나 PC 자체 변동사항이 많은 경우 IP 설정이 자동으로 되기 때문에 효율적으로 사용 가능하고, IP를 자동으로 할당해주기 때문에 IP 충돌을 막을 수 있다.

* DHCP 서버에 의존되기 때문에 서버가 다운되면 IP 할당이 제대로 이루어지지 않는다.

* 공유기에 연결하는 컴퓨터에 IP 주소를 지정하는 경우, DHCP에서 할당한 MAC주소와 IP주소가 다르면 인터넷 연결이 안된다.

> Example

```
Computer IP = 192.168.35.1
Computer MAC = a4:83:e7:21:99:fe

DHCP IP = 192.168.35.2
DHCP MAC = a4:83:e7:21:99:fe
```

