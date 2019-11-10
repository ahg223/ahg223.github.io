---
title : OOP Features
excerpt : Detail - Polymorphism, Abstraction, Encapsulation, Inheritance 

categories:
  - ClassicCS
tags:
  - ClassicCS
  - C++ 
---


## OOP Features
OOP에 특징을 4가지로 분류를 하면 `다형성`, `추상화`, `캡슐화`, `상속`라고 하며 5가지로 나누면 `은닉화`가 추가된다. `은닉화`는 `캡슐화`에 비해서 좀 더 구체적인 개념이라고 생각하면 된다.

여기서는 4가지로 분류해 정리하겠다.

### 추상화 (Abstraction)

OOP에서 추상화라는 개념은 ‘객체에서 공통된 속성과 행위를 추출하는 행위’ 라고 정의가 많이 된다. 하지만 이 개념은 `상속`에 더 적합하다 생각하여 좀 더 추가하겠다.

추상화는 ‘현실 세계를 프로그래밍으로 옮겨와 프로그래밍하는 행위, 현실의 사물들을 객체라 보고 그 객체로부터 개발하고자 하는 애플리케이션에 필요한 특징들을 뽑아와 프로그래밍 하는 행위’ 라고 한다.

예를들어 `사람`이라는 클래스를 정의할 때 특징은 나이, 성별, 키, 몸무게 등이 있다. 이 특징을 추출하면 다음과 같이 할 수 있다.

> Example

```
class Person{
public:
	int age;
	bool sex;
	float height;
	float weight;
	void eat();
	void sleep();
}
```

### 다형성 (Polymorphism)

`다형성`이란 같은 자료형에 여러 객체를 대입하여 다양한 결과를 얻어내는 것을 뜻한다. 하나의 타입으로 다양한 실행 결과를 얻을 수 있으며 객체를 부품화하여 유지 보수를 용이하게 한다.  그리고 `다형성`을 통하여 오버라이딩과 오버로딩을 사용할 수 있다.

### 오버라이딩(Overriding) vs 오버로딩(Overloading)

`오버라이딩`은 `재정의`라고 표현한다. 상위클래스에서 정의한 메소드를 하위클래스에서 다시 정의한다. 이때 하위클래스에서는 상위클래스에 메소드 이름, 파라매터, 반환타입 전부다 같아야한다.

> Example

```
class Person(){
public:
	void eat(string food){
		System.out.println("사람이 %s을 먹습니다.", food);
	}
}

class Student() extends Person{
public:
	void eat(string food){
		System.out.println("학생이 %s을 먹습니다.", food);
	}
}
```

`오버로딩`은 같은 이름의 함수를 여러 개 정의하고, 매개변수의 유형과 개수를 다르게 하여 다양한 유형의 호출에 응답하게 한다. 함수를 호출시 매개변수에 따라 매칭되어 함수를 실행시킨다.

> Example

```
class Caluclator(){
public:
	void sum(int a, int b);
	void sum(float a, float, b);
	void sum(int a, int b, float c);
}
```

추가로 다음과 같은 경우도 다형성에 포함된다.   

C++과 같은 객체지향언어에서 제공하는 `StringValue()`과 같이 범용 메소드 이름을 정의하여 형태에 따라 각각 적절한 변환 방식을 정의해둠으로써 객체의 종류와 상관없는 추상도가 높은 변환 형식을 구현할 수 있다.

> Example


```
//숫자를 문자열로 바꾸는 경우
string = number.StringValue();

//날짜를 문자열로 바꾸는 경우
string = date.StringValue();	
```


### 캡슐화 (Encapsulation)
실제로 구현되는 부분을 외부에 드러나지 않도록 캡슐로 감싸 이용방법만 알려주는 것이다. 다른 말로 데이터를 절대로 외부에서 직접 접근을 하면 안되고 오로지 함수를 통해서만 접근해야 하게 설계하는 것이다.  

은닉화는 캡슐화와 많이 혼용되지만 캡슐화에 비해 비교적 구체적인 개념이다. 내부 데이터, 내부 연산을 외부에서 접근하지 못하도록 은닉(hiding) 혹은 격리(isolation)시키는 것이며,  변수에 접근지정자를 `private` 로 지정하여 `setter` , `getter` 를 사용해 변수의 접근, 제어한다. UI 나 인터페이스 설계에서 핵심적인 부분이다.

예를들면 리모컨을 사용할 때 내부구조가 어떻게 된지는 모르지만 우리는 버튼을 이용하여 접근할 수 있다고 생각하면된다.

### 상속 (Inheritance)

`상속`은 객체들 간의 관계를 구축하는 방법이다. 하위 클래스에서 속성이나 오퍼레이션을 다시 정의하지 않고 상속받아서 사용함으로써 코드가 줄어든다. 그리고 좀 더 `범용성`있게 사용할 수 있다.
`사람`이라는 클래스로 상속으로 나타내 보겠다.

> Example

```
class Person{
public:
	int age;
	bool sex;
	float height;
	float weight;
	void eat();
	void sleep();
}
clss Student extends Person{
public:
	float score;
	string school;
	void study();
}
```

`학생`이라는 하위 클래스는 상위 클래스가 가지고 있는 모든 자료와 메소드를 물려받아 자유롭게 사용할 수 있지만, 또한 자신만의 자료와 메소드를 추가적으로 덧붙임으로써 새로운 형태의 클래스로 발전할 수 있다.



### 추상 클래스(Abstract Class) vs 인터페이스(Interface)

`추상클래스`와 `인터페이스` 두 가지 개념이 있는데 차이를 몰라서 정리를 했다.

`추상클래스` = 클래스 들의 틀(클래스)
`추상클래스`의 목적은 기존의 클래스에서 공통된 부분을 추상화하여 상속하는 클래스에게 구현을 강제화시켜 메서드의 동작을 구현하는 자식클래스로 책임을 위임 공유의 목적이라고 할 수 있다. 

> Example

```
abstract class AbstractClass

class Class extends AbstractClass
```

`인터페이스` = 클래스에게 공통점을 강요
`인터페이스`의 목적은 구현하는 모든 클래스에 대해 특정한 메서드가 반드시 존재하도록 강제한다. 말그대로 `인터페이스`는 뼈대 라고 할 수 있다. 뼈대를 기반으로 해서 구현을 하는 것이다. 마치 1개의 나사 설계도를 가지고 여러 개의 나사를 제품으로 만드는 것처럼 말이다.

> Example

```
interface Interface

class Class implements Interface
```

다중 상속도 가능하다.

```
class Class implements Interface1, Interface2
```

그리고 가장 큰 특징으로 `추상클래스`에 상속받은 클래스는 기존 메소드에서 확장이 가능하지만 `인터페이스`로 구현된 클래스는 인터페이스에서 제공된 메소드만 사용가능하며, 확장이 불가능하다.

### 가상함수 vs 순수 가상함수

C++ 에서는 `virtual` 키워드가 존재하여 `가상함수`를 구현할 수 있다.

`가상함수`는 `virtual` 키워드로 함수를 정의하며 `순수가상함수`는 함수를 정의하고 끝에 `virtual void func()=0` 과 같이 빈 함수를 만들어준다.

> Example

```
class AHG {
    
public:
    int value = 0;
    void func0() {
        cout << "AHG func0" << endl;
        cout << value << endl;
    }
    // 가상함수
    virtual void func1() {
        cout << "AHG func1" << endl;
    }
    // 순수 가상함수
    virtual void func2() = 0;
};

class Child : public AHG {
    
public:
    void setValue(int temp) {
        value = temp;
    }
    void func0() {
        cout << "Child func0" << endl;
    }
    void func1() override {
        cout << "Child func1" << endl;
    }
    void func2() override {
        cout << "Child func2" << endl;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here…
    Child child;
    AHG* ptr = &child;
    
    child.setValue(1);
    ptr->func0();   // AHG func0 \n 1
    ptr->func1();   // Child func1
    
    return 0;
}
```

`순수가상함수` = 너는 이 기능이 꼭 필요해. 그 기능은 너가 알아서 선언해 만약 선언하지 않으면 오류가 날꺼야  
`가상함수` = 이 기능을 물려줄건데 너가 선언을 안해도 기본적으로 작동이 되게 만들어줄게  

C++ 에서는 `순수가상함수`는 인터페이스를 자식에게 전달하여 재정의 즉 오버라이딩을 하기 위해 사용한다. 재정의를 하지 않으면 오류가 발생하여 반드시 자식 클래스에서 재정의를 해야한다.

`가상함수`는 함수내부 구현이 되어있는 인터페이스를 자식에게 전달한다. 함수의 내부 구현이 되어있어서 자식클래스에서는 함수를 다시 정의해도 되고 안해도 된다.

위 코드에서 `AHG` 클래스에 `func0`과 `Child` 클래스에 `func0`은 서로 다른 함수이다. 우연히 이름이 같게된 함수다.

### `is - a ` vs `has - a`


간단하게 설명하면 `is-a` 관계는 상속을 통하여 사용한다. 즉, ‘사람은 학생이다.’ 관계는 상속을 사용한다.

하지만, `has-a` 관계는 객체 합성을 통하여 사용한다. 즉, ‘자동차는 바퀴를 가지고 있다.’ 바퀴라는 클래스와 자동차 클래스를 따로 구현하여 객체합성을 통하여 사용한다.

`has - a` 관계 예제  

> Example 

```
class Car(){
public:
	void go(){
		Tire t = new Tire;
		t.run();
	}
}

class Tire(){
public:
	void run(){
	}
}
```

