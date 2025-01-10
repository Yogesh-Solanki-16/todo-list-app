import React from 'react'
import { useState } from 'react';

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      editTodo(value,task.id);
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
export default EditTodoForm;