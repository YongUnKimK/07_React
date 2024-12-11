import Exam1 from "./components/Exam1";
import Exam2 from "./components/Exam2";
import Exam3 from "./components/Exam3";
import Exam4 from "./components/Exam4";
import Exam5 from "./components/Exam5";
import Exam6_2 from "./components/Exam6_2";
import Exam6_1 from './components/Exam6_1';
import Exam7 from "./components/Exam7";
import TodoList from "./components/TodoList";

function App() {
  return ( // 부모 태그가 하나라도 없으면 오류발생, 감싸고 있는 태그가 하나라도 없으면 오류발생 ( 형제 레벨끼리 존재할수 없음)
           // React에서는 class가 className임   ( 태그 안은 JSX, 밖은 js) 
    <div> 
        {/* JSX 용 주석 ( ctrl + / 누르면 자동생성) 주석 이상하면 한/영전환 or 재부팅*/}
      <h1> Hello World ! </h1> 
      {/* <Exam1 /> */}
      {/* <Exam2 /> */}
      {/* <Exam3 /> */}
      {/* <Exam4 /> */}
      {/* <Exam5 /> */}
      {/* <Exam6_1 /> */}
      {/* <Exam6_2 /> */}
      {/* <Exam7 /> */}
      <TodoList />
    </div>
  );
}



export default App;