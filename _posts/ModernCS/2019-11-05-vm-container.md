---
title: "VM vs Container"
excerpt: "difference between them"

categories:
  - ModernCS
tags:
  - VirtualMachine
  - Container
---

![image](https://user-images.githubusercontent.com/34998051/68453986-8d49bc80-023a-11ea-8255-20d7bde48945.png)

VM - 가상머신이란?    
가상의 하드웨어를 만들어 낸 뒤 OS를 설치하여 연동하므로, 하드웨어 복사본 및 운영체제 복사본을 가진다. 많은 RAM과 CPU 싸이클을 소모한다.   


![image](https://user-images.githubusercontent.com/34998051/68453913-46f45d80-023a-11ea-88cb-de5502c0be96.png)

컨테이너란?  
OS와 보조 프로그램, 라이브러리, 적은 시스템 리소스만을 필요로 한다. VM에 비해 2~3배 많은 애플리케이션을 하나의 서버에서 처리할 수 있게 된다. 이러한 가벼운 특성 덕분에 개발, 테스트, 배포가 에자일하게 가능해진다.    

VM과 컨테이너의 장단점  
1. 컨테이너는 보안 문제가 존재한다. 컨테이너의 특성 때문에 /sys 아래의 디바이스 및 SELinux 등 많은 커널 서브 시스템을 컨테이너에서 다루게 되는데, 이 말인 즉슨 이론상으로 superuser 권한을 가진 컨테이너 유저는 OS를 크랙할 수 있다.
2. 많은 컨테이너화 된 애플리케이션을 많은 사람들이 배포하는데, 각각의 이미지에 대한 보장이 없어 에러 코드가 같이 다운될 수 있다.
3. 컨테이너는 하나의 애플리케이션을 실행하는 것에 초점이 맞춰져 있다. 마이크로 서비스를 원하지 않거나 더 많은 기능을 포함하고 싶다면 가상 머신을 사용하는 것이 옳다.
