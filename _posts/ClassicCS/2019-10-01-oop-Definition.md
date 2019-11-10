---
title : OOP Introduction
excerpt : Detail - Object vs Instance vs Class vs Method

categories:
  - ClassicCS
tags:
  - ClassicCS
  - C++ 
---

## OOP(Object Oriented Programming)

컴퓨터 프로그래밍의 패러다임 중 하나이다. 객체 지향 프로그래밍은 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 `객체`들의 모임으로 파악하고자 하는 것이다. 각각의 객체는 메시지를 주고받고, 데이터를 처리할 수 있다.

즉, 현실 세계를 프로그래밍으로 옮겨와 프로그래밍하는 것을 말한다. 현실 세계의 사물들을 객체라고 보고 그 `객체`로부터 개발하고자 하는 애플리케이션에 필요한 특징들을 뽑아와 프로그래밍 하는 것이다. 이것을 추상화라 한다.

`OOP` 로 코드를 작성하면 
1. 이미 작성한 코드에 대한 재사용성이 높다. 자주 사용되는 로직을 라이브러리로 만들어두면 계속해서 사용할 수 있으며 그 신뢰성을 확보 할 수 있다. 
2. 라이브러리를 각종 예외상황에 맞게 잘 만들어두면 개발자가 사소한 실수를 하더라도 그 에러를 컴파일 단계에서 잡아낼 수 있으므로 버그 발생이 줄어든다. 
3. 내부적으로 어떻게 동작하는지 몰라도 개발자는 라이브러리가 제공하는 기능들을 사용할 수 있기 때문에 생산성이 높아지게 된다. 
4. `객체` 단위로 코드가 나눠져 작성되기 때문에 디버깅이 쉽고 유지보수에 용이하다. 
5. 데이터 모델링을 할 때 객체와 매핑하는 것이 수월하기 때문에 요구사항을 보다 명확하게 파악하여 프로그래밍 할 수 있다.


## Object vs Instance vs Class vs Method

[https://alfredjava.wordpress.com](https://alfredjava.wordpress.com/2008/07/08/class-vs-object-vs-instance/)  
해당 글을 참고하였다.

* *객체(Object)*

소프트웨어 세계에 구현할 대상이며, 클래스에 선언된 모양 그대로 생성된 인스턴스이다. 객체는 모든 인스턴스를 대표하는 포괄적 의미도 가지고 있다. `객체`는 자신 고유의 속성(attribute)을 가지며 클래스에서 정의한 행위(behavior)를 수행할 수 있다.

* *인스턴스(Instance)* 

클래스를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체다. 객체를 소프트웨어에 실체화하면 그것을 `인스턴스`라고 부른다. `인스턴스`는 객체에 포함된다고 말할 수 있다.

* *클래스(Class)* 

같은 종류(또는 문제 해결을 위한)의 집단에 속하는 속성(attribute)과 행위(behavior)를 정의한 것으로 객체지향 프로그램의 기본적인 사용자 정의 데이터형(user defined data type)이라고 할 수 있다. 객체를 만들어 내기 위한 설계도 혹은 틀이라고 생각하면 된다.

* *메서드(Method)*

클래스로부터 생성된 객체를 사용하는 방법으로서 객체에 명령을 내리는 메시지라 할 수 있다. `메서드`는 한 객체의 서브루틴(subroutine) 형태로 객체의 속성을 조작하는 데 사용된다. 또 객체 간의 통신은 메시지를 통해 이루어진다.

> Example

```
// Class
class Circle {
	int radius;

	// Method
	public void setRadius(int value){
		self.radius = value;
	}
}

public class Example {
	public static void main(String[] args) {

		// Instance 생성
		Circle c1 = new Circle();
		c1.setRadius(10);
	}
}
```

