---
title: vsocde 터미널 컬러 입히기
date: 2024-06-22
description: vsocde spring 프로젝트 터미널 색상 설정
---
---

VSCode 로 Spring Boot 환경에서 로그 레벨별로 구분해서 볼 수 있게 컬러설정

## 1) VScode 터미널 색상 설정하기
---

### 1. Preferences -> Settings 

![](../../../../public/img/vsc터미널색상/1.png)

### 2. Color Customizations 검색 -> Edit in settings.json 클릭

![](../../../../public/img/vsc터미널색상/2.png)

### 3. 입력

![](../../../../public/img/vsc터미널색상/3.png)

## 2) Spring Boot 설정
---


- 진행중인 프로젝트의 application.properties 파일 열어서 입력

```
spring.out.put.ansi.enabled = always	
```


## 3) 결과
---

![](../../../../public/img/vsc터미널색상/5.png)

## 4) 참고
---

 [색상 조합 추천 사이트](https://glitchbone.github.io/vscode-base16-term/#/bright)

