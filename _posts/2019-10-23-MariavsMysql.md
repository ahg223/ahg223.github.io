---
title : Mysql vs MariaDB
excerpt : Mysql vs MariaDB

categories:
  - ModernCS
tags:
  - ModernCS
  - Database
---


## Mysql vs MariaDB

MySQL이 오라클로 넘어간 뒤, 불확실한 라이선스 문제를 해결하려고 나온 오픈 소스 DBMS. 2009년에 MySQL AB 출신 개발자들이 따로 나와 MariaDB 재단을 세워서 개발하고 있다. 

MariaDB 5.5 버전은 MySQL 5.5 버전을 기반으로 포크했기 때문에 MySQL 5.5 버전과 거의 모든 기능이 호환된다. 

그 이후 나온 10.0 버전은 MySQL 5.6에서 업데이트된 기능을 반영한 버전이다. 10.1 버전은 MySQL 5.7에서 추가 및 변경된 기능을 반영하여 출시되었다. MySQL과의 호환성을 최대한 유지하면서 좀더 나은 성능을 구현하는 것이 주된 개발 방향인 듯하다. 10.2부터는 MySQL의 개발 속도를 앞서나가서 오히려 이쪽 기능이 MySQL로 역수출되고 있는 실정이다.

* MariaDB는 서브 쿼리와 조인 쿼리 최적화를 지원한다.
* MariaDB는 멀티 스레드 리플리케이션을 지원한다.
* MariaDB는 롤(ROLE) 기반의 권한 관리를 지원한다.
* MariaDB는 가상 칼럼과 동적 칼럼을 지원한다.

### 가상칼럼

* 다른 컬럼에 의해서 자동으로 설정되는 기능을 의미함.

### 동적칼럼

* NoSQL 형태의 데이터 저장 및 접근을 위해서 동적 칼럼 기능을 제공함.
* 하나의 대용량 컬럼 정의하고, 그 칼럼을 여러 개의 임의 칼럼으로 정의하여 사용가능

