# 7주차 프론트엔드 세미나


## Hooks?

함수형 컴포넌트에서 state를 관리할 수 있도록 도와주는 것
(= 클래스형 컴포넌트의 state와 life cycle method 등)

### useState

상태를 관리

* `state` : 변수
* `setState` : `state`를 변경시켜주는 함수 -> 그냥 `state`에 할당하는 것은 적용이 안됨
```js
const [state, setState] = useState(0);   // 괄호 안의 값은 초기값

// 값을 변경하고 싶을 때
state = 1; // 이렇게 사용하면 안됨 X
setState(1);
```

### useEffect
컴포넌트가 렌더링 된 이후에도 추가적으로 비동기 작업을 해야할 때 사용

* `func` : 특정 시점에 실행하고 싶은 함수
* `deps` : 배열 형태이며 언제 실행 할건지 등을 정해줄 수 있음
  1. 빈 배열 `[]` : 마운트의 렌더링 때 실행
  2. 공백 : 모든 렌더링 때 실행 (마운트 + 업데이트)
  3. 배열에 특정 값 포함 `[elem1, ...]` : 해당 값이 업데이트 될 때 실행
  4. `func`에 반환 함수 작성 : 언마운트 또는 값이 업데이트되어 리렌더링 되기 직전에 실행 (clean up 함수)

```js
useEffect(func, deps);

useEffect(()=>{
    /* ... */
    return () => {
        /* clean up 함수 */
    };
},[state]);
```

라이프사이클 메소드처럼 사용가능

### useMemo & useCallback

**Memoization**
함수를 호출할 때마다 새롭게 값을 계산하지 않고 이전 실행 떄 저장해둔 값을 가져와서 사용

최적화를 위한 것이지만 남용할 경우 메모리를 많이 차지하게 됨

* `func` : 실행하고자 하는 함수, 이 함수의 반환값이 useMemo의 반환값 / 이 함수 자체가 memoization
* `value` : 배열 형태, 이 배열의 요소 값이 변경될 때만 다시 `func`을 실행하여 값/함수 객체를 업데이트

```js
// 결과 값을 저장
const memoizationCalculate = useMemo(func, value);

// 함수객체 자체를 저장
// 이후 저장된 함수 객체를 사용할 때 memoizationFunc 식별자를 이용하여 사용
const memoizationFunc = useCallback(func, value);
```

## To-do list 제작 실습&과제

실습 & 과제 레포지토리 주소 : https://github.com/harloxx/efub7-practice.git