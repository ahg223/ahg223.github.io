---
title: "programmers_숫자야구"
excerpt: "programmers_숫자야구"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

from itertools import permutations as perm

def solution(List):
    remove_list=[]
    result = [''.join(x) for x in perm('123456789',3)]

    for trying in List:

        numbers = list(str(trying[0]))
        strike = trying[1]
        ball = trying[2]

        strike_count = 0 
        ball_count = 0 
        case_list=[]

        for i in result:

            comp_numbers=list(str(i))
            case_list=[[numbers[n],comp_numbers[m]] for n in range(3) for m in range(3)]
            count=0
            for value in case_list:
                if count== 0 or count== 4 or count== 8:
                    if value[0] == value[1]:
                        strike_count += 1
                else:
                    if value[0] == value[1]:
                        ball_count+=1
                count +=1

            if (strike != strike_count) or (ball != ball_count):
                remove_list.append(i)

            strike_count=0 
            ball_count=0 
            case_list=[]    

        for remove in remove_list:
            result.remove(remove)
        remove_list=[]
        
    return len(result)

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
