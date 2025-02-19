import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [taskState, setTaskState] = useState(tasks);
  function handleDelete(taskIndex){
    setTaskState((prevTasks) => prevTasks.filter((task, index) =>index !== taskIndex));
  }
  const tasksArray = taskState.map((task, index) => 
    (<Task key = {index} task = {task} onDelete = {() => handleDelete(index)}/>)
    );
  console.log(taskState);
  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
