import { useState } from "react";

// 함수형 컴포넌트 (직관적, 사용쉬움)
const Exam2 = () => {

  // 상태
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1> Count : {count} </h1>
      <button onClick={handleClick}> 증가버튼 </button>
    </div>
  );
}

export default Exam2;