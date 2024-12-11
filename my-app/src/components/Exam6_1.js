import React, { useState } from 'react';
// rsc
// Contect API 사용하지 않았을 경우
// 부모 컴포넌트에서 자식컴포넌트 4로
// 상태나 데이터를 전달하려면 상태 내리꽂기를 진행해야함.

// -> 이 방식은 모든 중간 컴포넌트에 prop를 전달해야 
// 하기 때문에 비효율적이고 코드가 복잡해질 수 있음
//유지보수성, 코드 복잡도떨어짐

// 부모 컴포넌트
const Exam6_1 = () => {
  
  const [user, setUser] = useState("홍길동");

  return (
    <div>
      <h1> 부모에서부터 전달되는 { user }</h1>
      <Child1 user={user}/>
    </div>
  );

  
};

// 자식 컴포넌트

const Child1 = ({user}) => {
  return( 
    <div>
    <h1> Child1 1 전달중 : {user}</h1>
    <Child2 user={user} />
    </div>
  ); 
}
const Child2 = ({user}) => {
  return (
    <div>
    <h1> Child1 1 전달중 : {user}</h1>
    <Child2  />
    </div>
  )
}
const Child3 = ({user}) => {
  return (
    <div>
    <h1> Child1 1 전달중 : {user}</h1>
    <Child2  />
    </div>
  )
}
const Child4 = ({user}) => {
  return (
    <div>
    <h1> </h1>
    </div>
  )
};


export default Exam6_1;