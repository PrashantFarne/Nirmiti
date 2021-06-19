/* JSX for Form Component Start */

import React from "react";
import "./Form.css";
import { Button, TextField } from "@material-ui/core";
import { Input } from "@material-ui/core";

function Form({ setInputText, todos, setTodos, inputText, setStatus, inputField, setInputField }) {
  //here i can write javascript code and function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); //stop the refreshing the screen when we click the add button
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  // const inputFieldHandler= (e) =>{
  //   setInputField(e.target.value);
  // };

  return (
    <div className="container">
      <form className="form-control">
        <Input
        className="form-control"
          placeholder="Write task name"
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
        <i className="fas fa-plus-square">AddTask</i>
        </Button>
        <br></br><br></br>
        {/* <TextField
          placeholder="Description of task"
          className="todo-input"
          value={inputField}
          onChange={inputFieldHandler}
          type="text"
          className="todo-input"
        /> */}
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All Tasks</option>
            <option value="completed">Completed Tasks</option>
            <option value="uncompeted">Uncompleted Tasks</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;

/* JSX for Form Component End */

