import React, { useState } from 'react';

// React를 이용한 ToodList 생성
const TodoList = () => {

// Js ( Dom 에 실제로 접근하여 addEventListener등을 통해 실제 DOM을 변경)
// React ( 가상 Dom에 접근해야 하므로 진짜DOM에 접근 / 변경 x )

const [inputValue, setInputValue] = useState(""); // input에 작성한 값 기록 상태값.

// 작성한 todo를 기억할 배열 상태값
const [todoList , setTodoList] = useState([]) ;
// [ {title : inputValue, isDone : false }, ... ]
// 화살표 함수를 쓸때 {}를 쓰면 return ()를 써야 JSX를 사용할수있지만
// 바로 ()로 접근하면 안써도됨!


// Add Todo 버튼 클릭 시 todoLIst 상태에 업데이트 이벤트 핸들러
const handleAddTodo = () => {
  // javascript sread 연산자 (...) : 기존 배열이나 객체의 전체 또는 일부를 다른 배열이나 객체로 복사함
  // 참조 타입(배열이나 객체)인 상태(state)는 불변성을 유지해야 하므로 기존 배열을 직접 수정하지 않고
  // 새로운 배열을 생성해야 한다.
  // 불변성을 유지해야 하는 이유 : React가 상태의 변경을 감지해야 하기 때문에
  // 상태가 이전과 다르다고 React에게 알려주기 위해서는 상태의 참조값 (메모리 주소)이 기존과 다르게 변경되어야 함.
  // -> 변경되기 이전 원본의 상태값은 불변해야 하고, 새로운 참조객체를 만들어서 이 객체가 변경되었음을 React에 알려줌.
  setTodoList([...todoList , {title : inputValue, isDone : false } ]) ;
  setInputValue("");; // input창 값 비우기
}
// 완료 / 미완료 상태 업데이트 이벤트 핸들러
const handleToggleTodo = (index) => {

  const newTodoList = [...todoList];
  newTodoList[index].isDone = !newTodoList[index].isDone;
  setTodoList(newTodoList);
}

// todoList에 있는 현재 상태값 삭제 이벤트 핸들러
const handleDeleteTodo = (index) => {

  // splice 함수 : mutates 함수라서 원본이 변경되는 함수이므로 state인 todoLIst에 직접적 실행 불가 ( 불변성의 원칙)
  // todoList인 똑같은 배열 newTodoList를 만들어 splice 이용 후, setstate 함수 이용해서 상태 업데이트
  const newTodoList = [...todoList]; // todoList와 똑같은 배열 만들기 ( 복사 ) 
  newTodoList.splice(index, 1); // index 번호부터 1개 잘라내기
  setTodoList(newTodoList);
}


  return (
    <div>
      <h1> 나의 TodoList </h1>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={handleAddTodo} > Add Todo </button>
      
      <ul>
        {
          todoList.map( (todo, index ) => ((
            <li key={index} >
              <span style={{textDecoration : todo.isDone ? 'line-through' : 'none' }}>{todo.title}</span>
              <button onClick={() => handleToggleTodo(index) }>{todo.isDone ? '미완료' : '완료'}</button>
              <button onClick={() => handleDeleteTodo(index) } >삭제</button>
            </li>
          )

          ))
        }
      </ul>
      
    </div>
  );
};

export default TodoList;