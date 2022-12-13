import React from 'react';
import Animal from './component/Animal';
import Color from './component/Color';
import Count from './component/Count';

const App = () => {
  return (
    <div>
      <Color/>  
      <hr/>
      <Count/>
      <hr/>
      <Animal/>
    </div>
  );
};

export default App;

/*
Redux
- 리덕스를 사용하면 컴포넌트들의 상태 관련 로직들을 다른 파일들로 분리시켜서 더욱 효율적으로 관리 할 수 있으며 글로벌 상태 관리도 손쉽게 할 수 있다. 
- Redux와 React는 독립적으로 사용될 수 있는 별개의 다른 라이브러리이다.
- Redux는 자바스크립트 어플리케이션에서 흔히 쓰이는 상태관리 라이브러리이다.
- Redux는 Angular, Vue, Ember, jQuery 또는 Vanilla JavaScript와 같은 다른 라이브러리, 프레임워크에서도 사용할 수 있다

store
- 모두 한 곳에서 집중 관리
- 컴포넌트와는 별개로 스토어라는 공간이 있어서 그 스토어 안에 앱에서 필요한 상태를 담는다.
- 컴포넌트에서 상태 정보가 필요할 때 스토어에 접근한다.

action
- Action(액션)은 앱에서 스토어에 운반할 데이터를 말한다. (주문서)
- Action(액션)은 자바스크립트 객체 형식으로 되어있다.

reducer
- Action(액션)을 Store(스토어)에 바로 전달하는 것이 아니다.
- Action(액션)을 Reducer에 전달해야한다.
- Reducer가 주문을 보고 Store의 상태를 업데이트하는 것이다.
- Action을 Reducer에 전달하기 위해서는 dispatch() 메소드를 사용해야한다.

① Action(액션) 객체가 dispatch() 메소드에 전달된다.
② dispatch(액션)를 통해 Reducer를 호출한다.
③ Reducer는 새로운 Store를 생성한다.

[설치]
yarn add react-redux  ( npm i react-redux )
yarn add redux <- 리덕스가 제대로 설치가 안 되면 또 한 번 한다.
yarn add redux-devtools-extension ( npm i redux-devtools-extension )
*/
