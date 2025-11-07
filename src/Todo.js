import React, { useState } from "react";

function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [addTodos, setAddTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(newTodo){
        setAddTodos([...addTodos, {text:newTodo, completed: false}])
        setNewTodo("")
    }
  };

  const handleDelete = (index) => {
    const newtodos = [...addTodos];
    newtodos[index].completed = !newtodos[index].completed
    setAddTodos(newtodos)
  };

  return (
    <>
      <h1>Todo App Adding</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          placeholder="Add new todo"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">AddTodo</button>
      </form>

      <ul>
        {addTodos.map((todo, index) => (
          <li>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
