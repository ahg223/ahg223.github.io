---
title: "structure"
excerpt: "ComputerScience"

categories:
  - ClassicCS
tags:
  - ClassicCS
last_modified_at: 2019-08-23T22:00:00
---

80. 구조체 크기 (4바이트 정렬)

4 미만은 4로 침, 4 이상의 자료형이 있다면 자료형의 배수 만큼의 크기를 만듦

각 자료형의 배수자리에 들어감. [//packed하면](//packed하면) 사이사이에 들어감

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

![](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#71a91f6deccb4174994a1d2881d462a6)

[](https://www.notion.so/6ee1b8ed43fa4cac8205d0ea9f128da2#ff9cc4fe59904d9c913367b7af0da155)

글 제목: {{page.title}}
수정 시간: {{page.last_modified_at}}
