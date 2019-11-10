---
title: "structure"
excerpt: "Summary - 구조체"

categories:
  - ClassicCS
tags:
  - ClassicCS
  - C++
---

## 구조체 크기 (4바이트 정렬)

![Untitled (1)](https://user-images.githubusercontent.com/34998051/68491549-6b7a2500-028e-11ea-918e-44fa095bd932.png)
![Untitled](https://user-images.githubusercontent.com/34998051/68491552-6b7a2500-028e-11ea-8d6d-08371557b962.png)

4 미만은 4로 침, 4 이상의 자료형이 있다면 자료형의 배수 만큼의 크기를 만듦

각 자료형의 배수자리에 들어감. [//packed하면](//packed하면) 사이사이에 들어감

    '''C++
    struct A {
        char a;
        int b;
        char c;
        double d;
    } __attribute__((aligned(4))); // sizeof(A) = 24
    
    struct A {
        char a;
        int b;
        char c;
        double d;
    } __attribute__((aligned(4), packed)); // sizeof(A) = 16
    '''
