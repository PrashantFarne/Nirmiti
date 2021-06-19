/* JSX for Todo Component Start */

import React from "react";
import "./Todo.css";
import { Button } from "@material-ui/core";

const Todo = ({ text, todo, todos, setTodos }) => {
  
  //events
  const deleteHandler = () => {
    setTodos(todos.filter((e1) => e1.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <React.Fragment>
      <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </li>
        <br></br>
      </div>

<div id="todo2" >
      <div  >
        <select name="" className="dropdown-toggle">
          <option value="1">Assign Emplyoee1</option>
          <option value="2">Assign Emplyoee2</option>
          <option value="3">Assign Emplyoee3</option>
        </select>
        <Button
          variant="contained"
          color="default"
          onClick={completeHandler}
          className="complete-btn"
        >
          <i className="fas fa-check">Status</i>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={deleteHandler}
          className="trash-btn"
        >
          <i className="fas fa-check">Delete</i>
        </Button>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Todo;

/* JSX for Todo Component End */
