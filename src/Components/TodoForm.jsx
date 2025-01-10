import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
        addTodo(value);
        setValue("")
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          className="todo-input"
          type="text"
          placeholder="Enter Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">Add Task</button>

      </form>
    </>
  );
};
export default TodoForm;
