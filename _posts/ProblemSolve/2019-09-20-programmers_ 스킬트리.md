---
title: "programmers_스킬트리"
excerpt: "programmers_스킬트리"

categories:
  - ProblemSolve
tags:
  - ProblemSolve
  - python
last_modified_at: 2019-09-20T11:29:00
---

```python

def solution(skill, skill_trees):
    answer = len(skill_trees)

    for user in skill_trees:
        List=[]
        Flag=True
        for nope in skill:
            try: 
                index=user.index(nope)
                for i in List:
                    if i>index:
                        answer-=1
                        Flag=False
                        break
                if Flag==True: List.append(index)
                else: break
            except ValueError:
                List.append(10000)
        #print(List)

    return answer

```

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
