import React, { useState } from 'react'

export default function AddTodo(props) {

    const [title,setTitle]=useState("");
    const [des,setDes]=useState("");
    let submit=(e)=>{
       e.preventDefault();
       if(!title || !des){
        alert("please provide title and description!");
       }else{
        props.addTodo(title,des);
        setTitle("");
        setDes("");
       }
    }
    return (
        <div>
            <form className='container my-4' onSubmit={submit}>
            <h3>Add Todo</h3>
                <div className="form-group my-3">
                    <label>Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}  placeholder="Enter Title" />
                </div>
                <div className="form-group my-3">
                    <label>Description</label>
                    <input type="text" className="form-control"  value={des} onChange={(e)=>{setDes(e.target.value)}}  placeholder="Enter Description" />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
