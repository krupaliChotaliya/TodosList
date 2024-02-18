import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import About from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const initTodo = JSON.parse(localStorage.getItem("todos")) || [];

  let addTodo = (title, des) => {
    let index;
    // console.log(title,des);
    if (todos?.length != null && todos?.length > 0) {
      index = todos[todos.length - 1].sno + 1;
    } else {
      index = 1;
    }

    const mytodo = {
      sno: index,
      title: title,
      des: des,
    };
    // console.log(mytodo);
    setTodos([...todos, mytodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let onDelete = (todo) => {
    console.log("on delete called ", todo);
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(
      todos.filter((e) => {
        return e != todo;
      })
    );
  };

  const [todos, setTodos] = useState(initTodo);
  //immediately changes reflect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      {/* <Header title="Todos List" search={false}></Header> */}
      <Router>
        <Header title="Todos List"></Header>
        <Routes>
          <Route exact path="/" element={
            <>
              <AddTodo addTodo={addTodo}></AddTodo>
              <Todos todos={todos} onDelete={onDelete}></Todos>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
