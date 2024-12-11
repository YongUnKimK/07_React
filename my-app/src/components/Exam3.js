// 상태 내리꽂기 ( Props Drilling ) : 부모가 가진 데이터를 자식에게 전달해서
//                                   자식이 이용할 수 있게 해주는것
// export : 밑에 기본 export 하나 + 함수앞에 export

//rsc : 함수형 컴포넌트 생성
import React, { useState } from 'react';

const Exam3 = () => {

  const [name, setName] = useState("홍길동");
  // react 컴포넌트의 state를 변경해야 할 때
  // 무조건 setState를 통해서 업데이트 해주어야 하며,
  // 업데이트 하는 과정에서 기존의 상태값을 직접적으로
  // 수정하면 안된다.
  return (
    // 자식 컴포넌트 ( Child1 ) 에 부모의 상태인 name값을
    // username이라는 key에 세팅하여 props를 통해 전달
    <Child1 username={name} age={10} />
  );
};

// 자식 컴포넌트

const Child1 = (props) => {
  console.log(props);
  return (
    <div>
      <p>안녕</p>
      <p>나는 {props.username} 이야</p>      
      <p>{props.age}</p>   

      <Child2 name={props.username}/>   
    </div>
  );
};

// 손자 컴포넌트 ㅋㅋ
const Child2 = (props) => {
  return (
    <div>
      {props.name}
    </div>
  );
};



export default Exam3;
