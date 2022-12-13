import React, { useReducer } from 'react';

//초기값
const initialState = 0 //count의 초기값.

//함수
const reducer =(state,action)=>{
    switch(action.type){
        case 'INCREMENT' : return state +1
        case 'DECREMENT' : return state -1
        case 'RESET' : return 0

        default: return false // default 반드시 작성해야한다.
    }
}

const Test01 = () => {
    const [count,dispatch] = useReducer(reducer, initialState)
    //reduce = 축소하다. 체중을 줄이다.
    //하나의 변수를 가지고 활용할 요소가 많을경우. 코드 다이어트.

    return (
        <div>
            <h1>카운트 : {count}</h1>
            <p>
                <button onClick={()=>dispatch({type:'INCREMENT'})}>증가</button>
                <button onClick={()=>dispatch({type:'DECREMENT'})}>감소</button>
                <button onClick={()=>dispatch({type:'RESET'})}>초기화</button>
            </p>
        </div>
    );
};

export default Test01;
/*
useReducer()
React에서 컴포넌트의 상태 관리를 위해서 useState를 사용해서 상태를 업데이트를 하는데,
 useReducer를 사용하게 되면 컴포넌트와 상태 업데이트 로직을 분리하여 컴포넌트 외부에서도 상태 관리를 할 수 있다.
즉, 현재 컴포넌트가 아닌 다른 곳에 state를 저장하고 싶을 때 유용하게 사용할 수 있다. 

[사용법]
const [state, dispatch] = useReducer(reducer, initialState);
state : 현재 상태
dispatch : action을 발생시키는 함수
reducer : state와 action를 받아 새로운 state를 반환하는 함수
initialState : 초기값
*/