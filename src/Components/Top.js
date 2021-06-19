import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";


const Top =(props)=>{
    

        //status
        const [inputText, setInputText] = useState("");
        // const [inputField, setInputField] = useState("");
        const [todos, setTodos] = useState([]);
        const [status, setStatus] = useState("all");
        const [filteredTodos, setFilteredTodos] = useState([]);
      
        //runs once when the appstart
        useEffect(()=>{
          getLocalTodos();
        },[])
        
          //useEffect
          useEffect(()=>{
            filterHandler();
            saveLocalTodos();
          },[todos,status]);
      
        //function
        const filterHandler = () => {
          switch (status) {
            case "completed":
              setFilteredTodos(todos.filter((todo) => todo.completed === true));
              break;
            case "uncompleted":
              setFilteredTodos(todos.filter((todo) => todo.completed === false));
              break;
            default:
              setFilteredTodos(todos);
              break;
          }
        };
      
        //save to local
        const saveLocalTodos=()=>{
            localStorage.setItem("todos",JSON.stringify(todos));
          
        };
        //get local 
      
        const getLocalTodos=()=>{
          if(localStorage.getItem('todos')===null){
            localStorage.setItem('todos',JSON.stringify([]));
          }else{
           let todoLocal= JSON.parse(localStorage.getItem("todos"));
           setTodos(todoLocal);
          }
          ;
        };
         console.log(todos);
      
    
    
    
    return(
        <React.Fragment>
    <div className="App">
      <header>
        <h1 id="headtext">Task Manager</h1>
      </header>
      
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      ></Form>
      <TodoList 
      filteredTodos={filteredTodos} 
      setTodos={setTodos} 
      todos={todos}></TodoList>
      </div>
      </React.Fragment>
    );

}

export default Top;