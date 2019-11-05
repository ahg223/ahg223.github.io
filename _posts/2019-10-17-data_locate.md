---
title: "code vs data vs bss"
excerpt: "ComputerScience"

categories:
  - ClassicCS
tags:
  - ClassicCS
last_modified_at: 2019-08-23T22:00:00
---

9. 변수들이 메모리에 저장되는 영역

    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    - Code 영역 : 함수, 제어문, 상수 등등 함수에 대한 기계어 코드가 들어감
    - Data 영역 : 초기값 있는 전역변수, 배열, static으로 선언된 변수가 들어감
    - Bss 영역 : 초기값 없는 전역변수, 배열, static으로 선언된 변수가 들어감
    - Compile time에 크기가 결정되고 이후로 변동되지 않는다.

    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

    - Heap 영역 : 동적할당(malloc)으로 할당된 변수가 들어감. 프로그래머 영역.
    - Stack 영역 : 지역변수, 블록내에서 할당된 변수가 들어감. 블록을 벗어나면 사라짐
    - Run time에 Bss와 Heap사이를 기준으로 해서 Heap은 아래로 순차적으로 메모리를 사용하고 Stack은 위쪽으로 순차적으로 메모리를 사용한다

    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

10. const 용법

    [https://codemuri.tistory.com/424](https://codemuri.tistory.com/424)

11. 클래스 vs 구조체

    C++에서는 접근제어자가 기본 private vs public 인거 말고는 차이가 없음

    구조체도 new 가 되는가?

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
