---
title : Application Layer
excerpt : Detail - HTTP, HTTPS

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Network
---  

## 응용 계층 (Application Layer)

응용 계층(영어: application layer)은 컴퓨터 네트워크 프로그래밍에서 인터넷 프로토콜(IP) 컴퓨터 네트워크를 통하는 프로세스 간 통신 접속을 위해 설계되어 통신 프로토콜과 방식을 위해 보유된 추상 계층이다. 응용 계층 프로토콜은 기반이 되는 전송 계층 프로토콜을 사용하여 호스트 간 연결을 확립한다.  

OSI 모형에서 이 응용 계층의 정의는 범위가 더 좁다. OSI 모형은 응용 계층을 사용자 인터페이스로 정의한다. OSI 응용 계층은 사람이 인식하고 응용 계층 아래의 표현 계층과 상호 작용할 수 있는 데이터와 그림을 사용자에게 보여주는 역할을 맡는다.  


## HTTP (HyperText Transfer Protocol)

HTTP는 WWW 상에서 정보를 주고받을 수 있는 프로토콜이다. 주로 HTML 문서를 주고받는 데에 쓰인다. TCP와 UDP를 사용하며, 80번 포트를 사용한다.  

HTTP는 클라이언트와 서버 사이에 이루어지는 요청/응답(request/response) 프로토콜이다. 예를 들면, 클라이언트인 웹 브라우저가 HTTP를 통하여 서버로부터 웹페이지나 그림 정보를 요청하면, 서버는 이 요청에 응답하여 필요한 정보를 해당 사용자에게 전달하게 된다. 이 정보가 모니터와 같은 출력 장치를 통해 사용자에게 나타난다.  

HTTP를 통해 전달되는 자료는 http:로 시작하는 URL(인터넷 주소)로 조회할 수 있다.  

### HTTP Method

클라이언트가 웹서버에게 사용자 요청의 목적/종류를 알리는 수단  

![스크린샷 2019-10-05 오후 5 38 32](https://user-images.githubusercontent.com/44635266/66252476-05821580-e797-11e9-95ed-c7d841edc1d0.png)

* GET

 요청받은 URI의 정보를 검색하여 응답한다.  

* HEAD

GET방식과 동일하지만, 응답에 BODY가 없고 응답코드와 HEAD만 응답한다.  
웹서버 정보확인, 헬스체크, 버젼확인, 최종 수정일자 확인등의 용도로 사용된다.  

* POST

요청된 자원을 생성(CREATE)한다. 새로 작성된 리소스인 경우 HTTP헤더 항목 Location : URI주소를 포함하여 응답.  

* PUT

요청된 자원을 수정(UPDATE)한다. 내용 갱신을 위주로 Location : URI를 보내지 않아도 된다.   클라이언트측은 요청된 URI를 그대로 사용하는 것으로 간주함.  

* DELETE

요청된 자원을 삭제할 것을 요청함.  (안전성 문제로 대부분의 서버에서 비활성)  

* CONNECT

 동적으로 터널 모드를 교환, 프락시 기능을 요청시 사용.  

* OPTIONS

 웹서버에서 지원되는 메소드의 종류를 확인할 경우 사용  

* TRACE

 원격지 서버에 루프백 메시지 호출하기 위해 테스트용으로 사용.  

* PATCH

PUT과 유사하게 요청된 자원을 수정(UPDATE)할 때 사용  
PUT의 경우 자원 전체를 갱신하는 의미지만, PATCH는 해당자원의 일부를 교체하는 의미로 사용  

### 메세지 포멧

클라이언트와 서버 사이의 소통은 평문(ASCII) 메시지로 이루어진다. 클라이언트는 서버로 요청메시지를 전달하며 서버는 응답메시지를 보낸다.

> Client request

```
GET /index.html HTTP/1.1  //요청 URL정보 (Mehotd /URI HTTP버젼)
user-agent: MSIE 6.0; Window NT 5.0 //사용자 웹 브라우져 종류
accept: test/html; */*  //요청 데이터 타입 (응답의 Content-type과 유사)
cookie:name=value //쿠키(인증 정보)
refere: http://abc.com  //경유지 URL
host: www.abc.com //요청 도메인
```

> Server response

```
HTTP/1.1 200 OK //프로토콜 버젼 및 응답코드
Server: Apache  //웹 서버 정보
Content-type: text/html //MIME 타입
Content-length : 1593 //HTTP BODY 사이즈
<html><head>.....</head></html> //HTTP BODY 컨텐츠
```

### HTTP 응답 코드

클라이언트가 서버에 접속하여 어떠한 요청을 하면, 서버는 세 자리 수로 된 응답 코드와 함께 응답한다. 대표적인 HTTP의 응답 코드는 다음과 같다.


```
200 // OK // 오류없이 전송 성공
304 // Not Modified // 클라이언트의 캐시에 이 문서가 저장되었고 선택적인 요청에 의해 수행됨
404 // Not Found // 문서를 찾을 수 없음. 서버가 요청한 파일이나 스크립트를 찾지 못함.
500 // Internal Server Error	 // 서버 내부 오류.
```

### HTTP vs HTTPS

![image](https://user-images.githubusercontent.com/34998051/68601124-138a2b00-04e7-11ea-9ecb-4f20e44e2201.png)

HTTPS(HyperText Transfer Protocol over Secure Socket Layer, HTTP over TLS, HTTP over SSL, HTTP Secure)

월드 와이드 웹 통신 프로토콜인 HTTP의 보안이 강화된 버전이다. HTTPS는 통신의 인증과 암호화를 위해 넷스케이프 커뮤니케이션즈 코퍼레이션이 개발했으며, 전자 상거래에서 널리 쓰인다.

HTTPS는 소켓 통신에서 일반 텍스트를 이용하는 대신에, SSL이나 TLS 프로토콜을 통해 세션 데이터를 암호화한다. 따라서 데이터의 적절한 보호를 보장한다. HTTPS의 기본 TCP/IP 포트는 443이다.

보호의 수준은 웹 브라우저에서의 구현 정확도와 서버 소프트웨어, 지원하는 암호화 알고리즘에 달려있다.

HTTPS를 사용하는 웹페이지의 URI은 `http://`대신 `https://`로 시작한다.

![](https://user-images.githubusercontent.com/44635266/66919128-b6bc6180-f05b-11e9-99df-46897cac8620.png)

