---
title: "SmartCam API - 기획"
excerpt: "Project Design - SK BroadBand 우수상"

categories:
  - ProjectDesign
tags:
  - ProjectDesign
---

[code](https://github.com/ahg223/CloudCamAPI)    
[video_voiceO](https://youtu.be/Xsk-FFasEvY)  
[상장](https://user-images.githubusercontent.com/34998051/56076344-f1261700-5e0a-11e9-9815-f4c84823bec9.jpeg)

## 프로젝트 기획 계기 및 의도  
1. 친한 친구의 제안으로 공모전을 팀을 구성하여 참가  
2. CloudCam은 CCTV가 기본인데, 가정에 감시를 위한 디바이스는 거북할 수 있다 생각함   
3. 유흥을 위한 기능을 추가해 선입견을 극복하자 - 요즘 유행하는 영상 클립 기능을 추가해보자    


## 프로젝트 중 배운 것  
1. 기획은 사색이고 계획은 계산이다    
2. 1주짜리 공모전 일정이라 빠듯했다. 시간은 정말 중요한 개발 자원이라는 점을 느낌  


## 프로젝트 에러 핸들링 및 피드백  
1. CloudCam 클라우드에서 허가한 최소한의 API만 사용할 수 있어 시스템 구성이 쉽지 않았음  
2. 1주가 지나면 API를 통한 다운로드가 불가능해 미리 필요한 영상을 다운 받아두는 로컬 서버가 필요   
3. Network Attached Storage 활용 - 9~15mb 용량의 영상을 빠르게 제공하기 위하여  


![슬라이드1](https://user-images.githubusercontent.com/34998051/68539582-87ceac80-03c9-11ea-9c65-955fc5ff4640.jpeg)
![슬라이드7](https://user-images.githubusercontent.com/34998051/68539583-87ceac80-03c9-11ea-8a40-7fc5e4c2bf58.jpeg)
![슬라이드8](https://user-images.githubusercontent.com/34998051/68539584-87ceac80-03c9-11ea-823c-fbaa2620cb3d.jpeg)
![슬라이드9](https://user-images.githubusercontent.com/34998051/68539585-87ceac80-03c9-11ea-9c24-4a2b52756508.jpeg)
![슬라이드10](https://user-images.githubusercontent.com/34998051/68539586-88674300-03c9-11ea-9afe-a3e80ccf0323.jpeg)
![슬라이드11](https://user-images.githubusercontent.com/34998051/68539587-88674300-03c9-11ea-86ad-3c2e54aee17d.jpeg)
![슬라이드12](https://user-images.githubusercontent.com/34998051/68539588-88674300-03c9-11ea-9921-aeb44e4bcad0.jpeg)
![슬라이드13](https://user-images.githubusercontent.com/34998051/68539589-88674300-03c9-11ea-82c1-ae5c07f89df9.jpeg)
![슬라이드14](https://user-images.githubusercontent.com/34998051/68539590-88ffd980-03c9-11ea-9013-3220ad842556.jpeg)
![슬라이드15](https://user-images.githubusercontent.com/34998051/68539591-88ffd980-03c9-11ea-812f-e764afe6cdd9.jpeg)
![슬라이드16](https://user-images.githubusercontent.com/34998051/68539592-88ffd980-03c9-11ea-916a-122d8d30ee35.jpeg)
![슬라이드17](https://user-images.githubusercontent.com/34998051/68539593-89987000-03c9-11ea-9a19-ab2286623db8.jpeg)
![슬라이드18](https://user-images.githubusercontent.com/34998051/68539595-89987000-03c9-11ea-8bd6-157bdff905af.jpeg)
![슬라이드19](https://user-images.githubusercontent.com/34998051/68539596-89987000-03c9-11ea-952d-4cdc79803d1b.jpeg)
![슬라이드20](https://user-images.githubusercontent.com/34998051/68539597-89987000-03c9-11ea-8498-fd92f3c8f6e2.jpeg)
![슬라이드21](https://user-images.githubusercontent.com/34998051/68539598-8a310680-03c9-11ea-9c6b-1e81f2395663.jpeg)
![슬라이드22](https://user-images.githubusercontent.com/34998051/68539599-8a310680-03c9-11ea-958d-aeca2d8f9c7d.jpeg)
![슬라이드23](https://user-images.githubusercontent.com/34998051/68539600-8a310680-03c9-11ea-96c7-6a07a65fd4c3.jpeg)
![슬라이드24](https://user-images.githubusercontent.com/34998051/68539601-8a310680-03c9-11ea-8db2-fdd1af2dacc8.jpeg)
![슬라이드25](https://user-images.githubusercontent.com/34998051/68539602-8ac99d00-03c9-11ea-900b-fdb550ce89cc.jpeg)
![슬라이드26](https://user-images.githubusercontent.com/34998051/68539603-8ac99d00-03c9-11ea-99dc-2d74bc0722c0.jpeg)
![슬라이드27](https://user-images.githubusercontent.com/34998051/68539604-8ac99d00-03c9-11ea-8add-1f16cb4a4551.jpeg)
![슬라이드28](https://user-images.githubusercontent.com/34998051/68539605-8b623380-03c9-11ea-912f-117cb67b04c8.jpeg)
![슬라이드29](https://user-images.githubusercontent.com/34998051/68539606-8b623380-03c9-11ea-88ba-4505c125daf8.jpeg)
![슬라이드30](https://user-images.githubusercontent.com/34998051/68539607-8b623380-03c9-11ea-8609-ae98f3f548bd.jpeg)
![슬라이드31](https://user-images.githubusercontent.com/34998051/68539608-8b623380-03c9-11ea-96ff-ef8ed0fca065.jpeg)
![슬라이드32](https://user-images.githubusercontent.com/34998051/68539609-8bfaca00-03c9-11ea-97b0-8b123ed19761.jpeg)
![슬라이드33](https://user-images.githubusercontent.com/34998051/68539610-8bfaca00-03c9-11ea-9c61-a2dbaa1c519a.jpeg)
![슬라이드34](https://user-images.githubusercontent.com/34998051/68539612-8bfaca00-03c9-11ea-8d0c-4a9a50bb8bec.jpeg)
![슬라이드35](https://user-images.githubusercontent.com/34998051/68539613-8bfaca00-03c9-11ea-84d3-139bbc3b79d4.jpeg)
![슬라이드36](https://user-images.githubusercontent.com/34998051/68539614-8c936080-03c9-11ea-848f-cdd8da305a06.jpeg)
![슬라이드37](https://user-images.githubusercontent.com/34998051/68539615-8c936080-03c9-11ea-8a51-03742f6fedd0.jpeg)
![슬라이드38](https://user-images.githubusercontent.com/34998051/68539616-8c936080-03c9-11ea-8fd5-15b630d2679e.jpeg)
![슬라이드39](https://user-images.githubusercontent.com/34998051/68539617-8d2bf700-03c9-11ea-9338-2c9f9fcaf6ca.jpeg)
![슬라이드40](https://user-images.githubusercontent.com/34998051/68539618-8d2bf700-03c9-11ea-8ae7-b8b81ab716e9.jpeg)
![슬라이드41](https://user-images.githubusercontent.com/34998051/68539619-8d2bf700-03c9-11ea-82d8-a18b3a7479bf.jpeg)
![슬라이드42](https://user-images.githubusercontent.com/34998051/68539620-8d2bf700-03c9-11ea-8ffa-c674578759e6.jpeg)
![슬라이드43](https://user-images.githubusercontent.com/34998051/68539621-8dc48d80-03c9-11ea-92b6-18651e0cdc49.jpeg)
![슬라이드44](https://user-images.githubusercontent.com/34998051/68539622-8dc48d80-03c9-11ea-8828-d9cf2570adca.jpeg)
![슬라이드45](https://user-images.githubusercontent.com/34998051/68539623-8dc48d80-03c9-11ea-93ab-f2bbd49a2658.jpeg)
![슬라이드46](https://user-images.githubusercontent.com/34998051/68539624-8dc48d80-03c9-11ea-9f33-0f4b2031d9a6.jpeg)
![슬라이드47](https://user-images.githubusercontent.com/34998051/68539625-8e5d2400-03c9-11ea-9473-cb018a5ea4be.jpeg)
![슬라이드48](https://user-images.githubusercontent.com/34998051/68539626-8e5d2400-03c9-11ea-8e53-ef34b726ca5d.jpeg)
![슬라이드49](https://user-images.githubusercontent.com/34998051/68539627-8e5d2400-03c9-11ea-8b90-3021252117ec.jpeg)
![슬라이드50](https://user-images.githubusercontent.com/34998051/68539628-8e5d2400-03c9-11ea-9115-5e193d77bdab.jpeg)
