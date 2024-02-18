import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  let mystyle={
    minHeight:"70vh"
  }
  return (
    <>
      <div className="container" style={mystyle}>
        <h3>Todos List</h3>
        {props.todos?.length===0?"No todos to display":
        props.todos?.map((todo) => 
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}></TodoItem>
        )}
      </div>
    </>
  );
}



// if u return multiple statement than u need to write return keyword. syntax something like this:
// {props.todos.map((todo) => {
//     return (
//       <>
//          <h1>hioj</h1>
//         <TodoItem todo={todo}></TodoItem>
//       </h1>
//     );
//   })}


//if you return single line than syntax would be 
// {props.todos.map((todo) => 
// <TodoItem todo={todo}></TodoItem>
// )}