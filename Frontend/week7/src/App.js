import React, { useState, useEffect } from "react";
import "./App.css";

import loadTodo from "./data.json";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(()=>{
    // 처음 새로고침할 때 한 번만 불러오면 됨
    setTodos(loadTodo);
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault(); // 브라우저의 기본 action(원하지 않는 새로고침 같은..)을 방지함

    // 입력칸이 비어있거나 공백문자만 있는 경우 추가하지 않음
    if (todo.trim().length === 0) return;

    const newTodo = {
      id : new Date().getTime(),
      text : todo,
      complete: false
    }
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const deleteTodo=(id)=>{
    const updateTodo=[...todos].filter(todo => todo.id !== id);
    setTodos(updateTodo);
  };

  const editTodo=(id)=>{
    const editIdx=todos.findIndex((todo)=>todo.id===id);

    const temp = [...todos];
    temp[editIdx].text = editingText;

    setTodos(temp);
    setTodoEditing(null);
    setEditingText("");
  };

  const clickCheckBox = (id) => {
    const editIdx=todos.findIndex((todo)=>todo.id===id);

    const temp = [...todos];
    temp[editIdx].complete = !temp[editIdx].complete;

    setTodos(temp);
  };

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" 
          onChange={(e)=>{setTodo(e.target.value);}}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input type="checkbox" id="completed" checked={todo.complete} onChange={()=> clickCheckBox(todo.id)}/>

            {todo.id === todoEditing ? (
              <input type="text" onChange={(e)=>{setEditingText(e.target.value)}} value={editingText}/>
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            <div className="todo-edit">
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
              <button onClick={()=>editTodo(todo.id)}>Submit Edits</button>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
