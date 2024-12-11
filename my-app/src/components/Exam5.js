import React, { useState } from 'react';

// JSX 예제 ..!
const Exam5 = () => {
  // return <Exam5_1 /> ;
  // return <Exam5_2 /> ;
  return <Exam5_5  isLogin={true} />;
};

// JSX 예제 1 : 자바스크립트 변수로 사용하기
const Exam5_1 = () => {
  const name = "React";
  const element = <h1>hello. {name}</h1>

  return element;
};

// JSX 예제 2 : img 태그 이미지 사용 
const Exam5_2 = () => {
  const [userImg, setUserImg] = useState("https://i.ibb.co/b7CSJ51/image.jpg");
  const element = <img src={userImg}/>;
  
  return element;
};

// JSX 예제 3 : 로그인 여부에 따라 화면 다르게 보이기 ( if-else)
// if else보다는 삼항 연산자를 많이 쓴대요
const Exam5_3 = (props) => {

  if(props.isLogin) {
    return <h1> 환영합니다 </h1>
  } else {
    return <h1> 로그인 해주세요</h1>
  }

}

// JSX 예제 4 : 로그인 여부에 따라 화면 다르게 보이기 ( 삼항 연산자 )
const Exam5_4 = (props) => {
  return <h1>{props.isLogin ? '환영합니다' : '로그인 해주세요'}</h1>


}

// JSX 예제 5 : 배열을 이용한 화면 렌더링 ( 자주 사용 한대요 )
// - 서버에서 응답받은 데이터는 대부분 배열 ( List ) 형태

const Exam5_5 = () => {

  const members = ["짱구", "유리" ,"찰스", "후니" , "맹구"];
  const listItems = members.map((mem, index) => <li key={index}>{mem}</li>);
  // [<li>짱구</li>,<li>유리</li>,<li>찰스</li>,<li>후니</li>,<li>맹구</li>]
  // -> 이런 형태의 새로운 배열을 만들어 반환

  // Each child in a list should have a unique "key" props
  // React에서 동적인 리스트를 렌더링할 때
  // 각 자식 컴포넌트가 고유한 key 속성을 가져야 한다는 규칙 위배시 발생하는 경고
  // 보통 key값은 index 값으로 사용함

  return <ul>{listItems}</ul>
};

export default Exam5;