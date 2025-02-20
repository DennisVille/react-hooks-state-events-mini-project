import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
 
  // array containing the task items
  const tasksArray = tasks.map((task, index) => 
    (<Task key = {index} task = {task} onDelete = {() => handleDelete(index)}/>)
    );
  console.log(tasks);
  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
