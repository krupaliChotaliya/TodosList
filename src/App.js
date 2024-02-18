import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';

function App() {
  let todos=[
    {
      sno:1,
      title:"go to the market",
      des:"you need to go to market to done the job1"
    },
    {
      sno:2,
      title:"go to the mall",
      des:"you need to go to mall to done the job2"
    },
    {
      sno:3,
      title:"go to the ghat",
      des:"you need to go to ghat to done the job3"
    },
  ]

  return (
   <>
   {/* <Header title="Todos List" search={false}></Header> */}
   <Header title="Todos List" ></Header>
   <Todos todos={todos}></Todos>
   <Footer></Footer>
   </>
  );
}

export default App;
