import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskState, setTaskState] = useState(TASKS);
  const [categoryState, setCategoryState] = useState("All");
  //task list delete button event handler
  function handleDelete(taskIndex){
    setTaskState((prevTasks) => prevTasks.filter((task, index) =>index !== taskIndex));
  }
  function categoryFilterButton(category){
    setCategoryState(category);
    setTaskState(TASKS.filter((task) => category == "All" ||task.category === category));
  }
  function onSubmitHandler(formData){
    setTaskState((prevTasks) =>[...prevTasks, formData]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCategory = {categoryState} onClickHandler = {categoryFilterButton}/>
      <NewTaskForm categoriesList = {CATEGORIES} onSubmitHandler = {onSubmitHandler}/>
      <TaskList tasks = {taskState} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;
