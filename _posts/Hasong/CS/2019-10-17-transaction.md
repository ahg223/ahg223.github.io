---
title: "transaction"
excerpt : Need retouch

categories:
  - ClassicCS
tags:
  - ClassicCS
---

48. 트랜잭션

ACID // Rollback, Commit

1. Atomicity (원자성): 실행 되거나 vs 안되거나
2. Consistency (일관성): 트랜잭션이 성공적으로 완료되면 일관적인 DB 상태 유지 (컬럼이 int에서 string으로 바뀐다거나 키가 널이라거나 하면 안됨)
3. Isolation (고립성): 각각의 트랜잭션끼리 간섭없이
4. Durability (지속성): 트랜잭션이 정상적으로 종료되면 영구적으로 결과 저장

82. 트랜잭션

UNCOMMIT된 것도 읽음

[](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#7f690a68c4d24538a2e2d2a5dd9b6955)

비긴이 되기 전 값만을 계속 셀렉트

(insert는 못막음)

[](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#de227f274ffc49a59ab264cceb82635d)

커밋 된 것만 읽음

(커밋 되지 않으면 언두에 저장)

1이 커밋하면 2가 트랜잭션 하는동안 

셀렉트 한게 바뀜 ⇒ 정합성 어긋

[](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#030b10c79d194edea261f43c394a7792)

- 첫번째 쿼리에 없던 레코드가 두번째 쿼리에서 나타나는 현상
- 이를 방지하기 위해서는 쓰기 잠금을 걸어야 한다.

[](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#db45bb0fce904a65a1bad1fc5a97e518)

- Non-Repeatable Read: 정합성
- Dirty Read: 트랜잭션이 작업이 완료되지 않았는데도 다른 트랜잭션에서 볼 수 있게 되는 현상

[](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#52c8b43ff0344ee69239408e59e79f2e)

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
