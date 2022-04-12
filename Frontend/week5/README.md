# React 기초 및 영화 웹 토이프로젝트

> webstorm 2021.3.2

## 세미나 내용 정리
### Virtual DOM
* `Document Object Model` : 웹 페이지를 이루는 태그들을 브라우저가 트리구조로 만든 객체 모델
* ~~하나에 변화가 생기면 모든 페이지를 다시 불러옴~~<br>**가상 DOM에 새로 update한 뒤, 이전 DOM과 비교하여 변화가 있는 부분만 새로 갈아끼움**
### Component
* React로 만들어진 애플리케이션을 이루는 최소한의 단위
* **재사용성**을 가지게 함
* **Life Cycle**이 존재함
  * _Mounting - Updating - Unmounting_
    * 클래스형 컴포넌트 : 라이프사이클메소드를 이용하여 접근
    * 함수형 컴포넌트 : `useEffect`와 같은 Hooks를 사용하여 접근
* `props`를 사용하여 부모 컴포넌트에서 자식 컴포넌트로 값을 보낼 수 있음
### JSX
* JavaScript에서 HTML을 작성할수 있도록 만들어진 문법
* 브라우저에서 바벨을 사용해 JavaScript코드로 변환 → 우리가 익숙한 HTML 코드로 작성할 수 있도록 도와줌
* 규칙
  1. React는 하나의 컴포넌트만을 랜더링, `<div>`태그 등을 이용하여 감싸주어야함
  2. JavaScript 표현식의 경우 `{}`로 감싸서 나타낼 수 있음 
  3. `if`문 사용불가 → 대신 삼항연산자 `?` 사용
  4. 카멜 표기법
```js
     return(
      <div>
        <h1>Hello</h1>
        <span>hi</span>
        {identifier}
      </div>
  )
```

### state
* 유동적인 데이터를 다루기 위해 존재
* 이 값에 변화가 생기면 해당 컴포넌트를 리렌더링
  * 클래스형 컴포넌트 : `this.state` 
  * 함수형 컴포넌트 : `useState` (Hooks의 일종)

## 5주차 과제 - 영화 웹 토이프로젝트 완성하기
* 기본 js 코드 제공
* 적절하게 `className`이용하여 css 적용하기
* gh-pages 이용하여 배포

