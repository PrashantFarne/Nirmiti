import React from 'react';
import Task from './Task';


function Line(props){
    const{status,tasks,addTask,deleteTask,addEmptyTask,moveTask}=props;

    let tasklist,tasksForStatus;

    function handleAddEmpty(){
        addEmptyTask(status);

    }

    if(tasks){
        tasksForStatus=tasks.filter((task)=>
        {
            return task.status===status;
        });
    }
    if(tasksForStatus){
        tasklist=tasksForStatus.map((task)=>
        {
            return(
                <Task
                addTask={(task)=>addTask(task)}
                deleteTask={(id)=>deleteTask(id)}
                moveTask={(id,status)=>moveTask(id,status)}
                key={task.is}
                task={task}
                />
            )
        })
    }

    return(
        <div className="statusLine">
            <h3>{status}</h3>
            {tasklist}
            <button onClisk={handleAddEmpty} className="buttton addTask">Add</button>
        </div>
    )
}

export default Line;