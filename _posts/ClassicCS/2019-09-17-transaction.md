---
title: "Transaction"
excerpt: "Summary - UNCOMMIT, COMMIT, Dirty Read"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - Database
---

## 트랜잭션

### Read Uncommited
UNCOMMIT된 것도 읽음

![Untitled](https://user-images.githubusercontent.com/34998051/68493054-14c11b00-028f-11ea-9b8a-a4c4417633fa.png)

### Read Commited
커밋 된 것만 읽음

(커밋 되지 않으면 언두에 저장)

1이 커밋하면 2가 트랜잭션 하는동안 

셀렉트 한게 바뀜 ⇒ 정합성 어긋

![Untitled (2)](https://user-images.githubusercontent.com/34998051/68493060-168ade80-028f-11ea-8764-ada891bdf938.png)

### Repeatable Read
비긴이 되기 전 값만을 계속 셀렉트

(insert는 못막음)

![Untitled (1)](https://user-images.githubusercontent.com/34998051/68493057-15f24800-028f-11ea-8fc6-d77694d4a9ff.png)


### Serializable Read

- 첫번째 쿼리에 없던 레코드가 두번째 쿼리에서 나타나는 현상
- 이를 방지하기 위해서는 쓰기 잠금을 걸어야 한다.

![Untitled (3)](https://user-images.githubusercontent.com/34998051/68493061-168ade80-028f-11ea-9956-513b5f0578a4.png)

- Non-Repeatable Read: 정합성
- Dirty Read: 트랜잭션이 작업이 완료되지 않았는데도 다른 트랜잭션에서 볼 수 있게 되는 현상

![Untitled (4)](https://user-images.githubusercontent.com/34998051/68493063-168ade80-028f-11ea-8e23-116e2a385d11.png)
