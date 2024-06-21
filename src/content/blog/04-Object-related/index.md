---
title: Object
date: 2024-06-21
description: Object 활용
---
---

## 1 . instanceof
---

```java
private static void method(Object obj) {  
    if (obj instanceof InstanceType instance) {  
        instance.method();  
    }  
}
```

- 여기서 InstanceType은 검사하려는 특정 타입을, instance는 그 타입으로 다운캐스팅 된 객체를 참조하는 변수를 나타내고, 이 패턴은 특히 타입이 여러 가지일 수 있는 매개변수를 처리할 때 많이 사용.
- 타입 검사와 다운캐스팅을 한 줄의 코드로 수행할 수 있음.