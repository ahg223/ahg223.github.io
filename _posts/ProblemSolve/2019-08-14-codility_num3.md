---
title: "codility_num3"
excerpt: "codility_num3"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-08-14T16:40:00
---

```python

from itertools import combinations

Min = 3000001
Num = list( map(int, input().split()) )

cmds = list(combinations(sorted(Num), 3))

cmds.sort(key=lambda x:abs(sum(x)))

print(cmds[0])


```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
