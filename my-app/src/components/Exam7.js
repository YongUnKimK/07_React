// SpringBoot 서버로, React 클라이언트로 사용

import React, { useState } from 'react';

const Exam7 = () => {

  const [message, setMessage] = useState(null);
  const [user, setUser] = useState("");
  

  const getPortNumber = () => {

    fetch("http://localhost/getPortNumber")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      setMessage(data);
    }).catch((err) => {
      console.log(" err : " + err );
    })

  };

  const getUserInfo = () => {
    fetch("http://localhost/getUserInfo", {
      method : "post",
      headers : {"Content-Type" : "application/json"},
      body    : JSON.stringify({name : "홍길동" , age : 20})
  })
  .then((res) => res.text())
  .then((data) => setUser(data))
  .catch((err) => console.log(err));  
  }
    // fetch요청 post로 보내야한다

    // headers 설정 필수

    // body JSON 형태로 name : 홍길동 , age : 20 

    // 응답받은 값을 user 상태에 세팅

    // catch (err 발생시 코드 작성하기 !)



  

  return (
    <div>
      <p> 1. 서버로부터 응답 받은 값 </p>  
      <button onClick={getPortNumber}> 통신하기</button>  
      <ul>
        {message?.map((msg, idx) =>  <li key={idx}> {msg} </li>  )}
      </ul>

      <p> 2. 서버로 값 전달 후, 응답 받은 값 출력하기 </p>
      <button onClick={getUserInfo}> 통신하기~</button>

      <p> {user} </p>
    </div>
  ); //message옆에 안전탐색연산자로 ? 첨가해줘야함!! or 빈배열로 해야한다
     // null은 에러를 발생시키지만 빈배열은 null이 아니기떄문에
};

export default Exam7;