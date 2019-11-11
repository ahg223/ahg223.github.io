---
title : Application Layer
excerpt : Detail - DHCP 개념

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Network
---  

## DHCP (동적 호스트 구성 프로토콜, Dynamic Host Configuration Protocol)

![](https://user-images.githubusercontent.com/44635266/66919769-f2a3f680-f05c-11e9-861d-032992674b72.png)

동적 호스트 구성 프로토콜(Dynamic Host Configuration Protocol, DHCP)은 호스트 IP 구성 관리를 단순화하는 IP 표준이다. 동적 호스트 구성 프로토콜 표준에서는 DHCP 서버를 사용하여 IP 주소 및 관련된 기타 구성 세부 정보를 네트워크의 DHCP 사용 클라이언트에게 동적으로 할당하는 방법을 제공한다.

쉽게 말해 가정에서 흔히 볼 수 있는 공유기라고 생각하면 됩니다.

백문불여일견이라고 저희집 DHCP를 확인해 보았습니다. 컴퓨터와 노트북을 연결시켜놓은 뒤에 노트북에 IP를 확인해보았습니다.

![](https://user-images.githubusercontent.com/44635266/66919771-f2a3f680-f05c-11e9-9a51-e1fdc0b7f7d7.png)

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

노트북에 ip는 `192.168.35.132`이고 데스크탑은 `192.168.35.75` 입니다. 자세히 보면 `ether` 뒤에 MAC 주소도 정확하게 일치하는것을 볼 수 있습니다.

### 동작원리

![](https://user-images.githubusercontent.com/44635266/66919768-f2a3f680-f05c-11e9-91f7-91a7d31bb25f.png)

DHCP 동작 원리는 크게 네단계로 단말과 서버간에 통신이 이루어 진다.

1. DHCP Discover :

메시지 방향: 단말 -> DHCP 서버 로 이루어 지며 브로드캐스트 메시지 (Destination MAC = FF:FF:FF:FF:FF:FF) 를 통해서, 단말장비가 DHCP 서버에게 아이피 주소를 할당을 요청하는것이다

2. DHCP Offer :

메시지 방향: DHCP 서버 -> 단말로 이루어진다. 브로드캐스트 메시지 (Destination MAC = FF:FF:FF:FF:FF:FF)이거나 유니캐스트를 통해서 이루어지며, 단말에서 요청을 한 아이피 주소 정보를 포함한 네트워크 정보의 할당 요청을, DHCP 서버가 받아서 이것에 대해서 응답을 하는것이며, 이때 아이피 주소 정보 와 단말의 MAC 주소 정보 등을 네트워크 정보와 함께 같이 전송한다.

3. DHCP Request:

메시지 방향: 단말 -> DHCP 서버 로 이루어진다. 브로드캐스트 메시지 (Destination MAC = FF:FF:FF:FF:FF:FF) 로 단말이 받은 아이피 주소 정보를 사용하겠다는 것을 서버로 보내서, 확정을 받기 위한 메시지 이다.

4. DHCP Ack:

메시지 방향: DHCP 서버 -> 단말 로 이루어 진다 브로드캐스트 메시지 (Destination MAC = FF:FF:FF:FF:FF:FF) 혹은 유니캐스트일수 있다. 단말에서 보낸 DHCP Request 메시지 내의 Broadcast Flag=1이면 DHCP 서버는 DHCP Ack 메시지를 Broadcast로, Flag=0 이면 Unicast로 보내주며, 단말의 MAC 어드레스에 매칭이 되는 IP 주소와 게이트웨이 주소를 확정하여 주는 것이다.

### 특징

* PC의 수가 많거나 PC 자체 변동사항이 많은 경우 IP 설정이 자동으로 되기 때문에 효율적으로 사용 가능하고, IP를 자동으로 할당해주기 때문에 IP 충돌을 막을 수 있습니다.

* DHCP 서버에 의존되기 때문에 서버가 다운되면 IP 할당이 제대로 이루어지지 않습니다.

* 공유기에 연결하는 컴퓨터에 IP 주소를 지정하는 경우에 DHCP에서 할당한 MAC주소와 IP주소가 다르면 인터넷 연결이 안됩니다.

> Example

```
Computer IP = 192.168.35.1
Computer MAC = a4:83:e7:21:99:fe

DHCP IP = 192.168.35.2
DHCP MAC = a4:83:e7:21:99:fe
```

