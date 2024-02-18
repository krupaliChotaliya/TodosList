import React from "react";

export default function TodoItem(props) {
  return (
    <div className="card my-3">
      <div className="card-header">{props.todo.sno}</div>
      <div className="card-body">
        <h5 className="card-title">{props.todo.title}</h5>
        <p className="card-text">{props.todo.des}</p>
       <button className="btn btn-danger">delete</button>
      </div>
    </div>
  );
}
