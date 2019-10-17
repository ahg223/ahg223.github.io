---
title: "transaction"
excerpt: "ComputerScience"

categories:
  - Study
tags:
  - ComputerScience
last_modified_at: 2019-08-23T22:00:00
---

48. 트랜잭션

ACID // Rollback, Commit

1. Atomicity (원자성): 실행 되거나 vs 안되거나
2. Consistency (일관성): 트랜잭션이 성공적으로 완료되면 일관적인 DB 상태 유지 (컬럼이 int에서 string으로 바뀐다거나 키가 널이라거나 하면 안됨)
3. Isolation (고립성): 각각의 트랜잭션끼리 간섭없이
4. Durability (지속성): 트랜잭션이 정상적으로 종료되면 영구적으로 결과 저장

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
