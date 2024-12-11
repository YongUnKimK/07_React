import React, { createContext, useContext, useState } from 'react';
// rsc
// Context API 사용했을 때

// Context API : REact 컴포넌트 트리 전체에서 데이터를 사용할 수 있는 방법을 제공
//               중첩된 데이터를 전달하는데 있어 불필요한 pops drilling ( 상태 내리꽂기 ) 를 방지함.
//               사용하기 위해선 useContext hook 이 필요함.
//

// createContext : Context 객체를 생성
// Context : react에서 컴포넌트 계층 구조를 통해 데이터를 효율적으로 전달하기 위한 매커니즘(작동원리)
const UserContext = createContext();
// Provider
// Consumer 

// 부모 컴포넌트
const Exam6_2 = () => {
  
  const [user, setUser] = useState("홍길동");

  return (
    <UserContext.Provider value={user}> 
    <div>
      <h1> 부모에서부터 전달되는 { user }</h1>
      <Child1 /> {/* pops로 전달하지 않아도 가능할까 */}
    </div>
    </UserContext.Provider> 
    
  );  
};

// 자식 컴포넌트

const Child1 = ({user}) => {
  return(     
      <div>
        <h1> Child1 1 전달중 : {user}</h1>
        <Child2  />
      </div>   
  ); 
}

const Child2 = () => {

  const user = useContext(UserContext);
  return (
    <div>
    <h1> Child1 2 전달중 : {user}</h1>
    <Child3  />
    </div>
  )
}
const Child3 = ({user}) => {
  return (
    <div>
    <h1> Child1 1 전달중 : {user}</h1>
    <Child4  />
    </div>
  )
}
const Child4 = () => {

  const user = useContext(UserContext);
  // context로 등록한 객체중 UserContext를 부르겠따
  return (
    
    <h1> Child 4  : {user} </h1>
   
  )
};


export default Exam6_2;