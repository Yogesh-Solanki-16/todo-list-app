import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";

const TodoWrappers = () => {
  const [todo, setTodo] = useState([]);

  //! Add Todo
  const addTodo = (taskInput) => {
    setTodo([
      ...todo,
      { id: uuidv4(), task: taskInput, completed: false, isEditing: false },
    ]);
  };
  console.log(todo);

  //! Delete Todo
  const deleteTodo = (id) => setTodo(todo.filter((todo) => todo.id !== id));

  //! Toggel Todo
  const toggleComplete = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //! Edit Todo
  const editTodo = (id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  //! Edit Todo 2
  const editTask = (task, id) => {
    setTodo(
      todo.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />

      {todo.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
export default TodoWrappers;
