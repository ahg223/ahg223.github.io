---
title : Web Resource
excerpt : Detail - URI vs URL vs URN, MIME

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Web
---

## URI vs URL vs URN

### URI (통합 자원 식별자, Uniform Resource Identifier)

인터넷에 있는 자원을 나타내는 유일한 주소이다. URI의 존재는 인터넷에서 요구되는 기본조건으로서 인터넷 프로토콜에 항상 붙어 다닌다.
URI의 하위개념으로 URL, URN이 있다.

문법

`schema:[//[user[:password]@]host[:port]][/path][?query][#fragment]`

### URL (파일 식별자, Uniform Resource Locator)

네트워크 상에서 자원이 어디 있는지를 알려주기 위한 규약이다. 즉, 컴퓨터 네트워크와 검색 메커니즘에서의 위치를 지정하는, 웹 리소스에 대한 참조이다. 그래서 해당 리소스에 대한 위치가 계속해서 변할 수 있다. 흔히 웹 사이트 주소로 알고 있지만, URL은 웹 사이트 주소뿐만 아니라 컴퓨터 네트워크상의 자원을 모두 나타낼 수 있다. 그 주소에 접속하려면 해당 URL에 맞는 프로토콜을 알아야 하고, 그와 동일한 프로토콜로 접속해야 한다.

> Example

* http://example.com/mypage.html
* ftp://example.com/download.zip
* mailto:user@example.com
* file:///home/user/file.txt
* tel:1-888-555-5555
* http://example.com/resource?foo=bar#fragment


### URN — Uniform Resource Name
 URN은 영속적이고, 위치에 독립적인 자원을 위한 지시자로 사용하기 위해 RFC 2141문서에서 정의되었다.

> Example 

* urn:isbn:0451450523 to identify a book by its ISBN number.
* urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66a globally unique identifier

즉, 사람으로 비유를 하면 URI는 ‘김철수’이며, URL은 ‘김철수가 사는 주소’다 이 위치는 계속해서 변할수 있다. 하지만 URN은 ‘김철수의 주민등록번호’라고 생각하면된다. 한번 정해진 URN은 바뀌지 않기 때문이다.



## MIME

*MIME 타입*이란 클라이언트에게 전송된 문서의 다양성을알려주기 위한 메커니즘입니다:웹에서 파일의 확장자는 별 의미가 없습니다. 그러므로,각 문서와 함께 올바른MIME 타입을 전송하도록,서버가 정확히 설정하는 것이중요합니다.브라우저들은 리소스를 내려받았을 때해야 할 기본 동작이 무엇인지를 결정하기 위해 대게 MIME 타입을 사용합니다.
이와 관련해서 가장 주용한 것은 헤더는 또한 보내지는 자원의 content 타입이 포함되는 것이다. 이것은 Content-Type 헤더에 의해 지정되는데, 이 값은 표준 MIME-Type의 하나이다.

> Example

Content-Type: text/css
Content-Type: text/xml

Text

```
text/plain, text/html, text/css, text/javascript
```

Image

```
image/gif, image/png, image/jpeg, image/bmp
```

Video

```
vidoe/webm, video/ogg
```

