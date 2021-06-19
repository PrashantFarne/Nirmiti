/* JSX for TodoList Component Start */

import React from "react";
import Todo from "./Todo";
import "./Todo.css";
import "./TodoList.css";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            text={todo.text}
            todos={todos}
            todo={todo}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

/* JSX for TodoList Component End */

