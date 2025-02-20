import React, { useState } from "react";

function NewTaskForm({categoriesList, onSubmitHandler}) {
  const [formData, setFormData] = useState({
    category: "code",
    text: "",
  })
  const categoriesArrayWithoutAll = categoriesList.filter((category) => category !== "All");
  const categoriesArray = categoriesArrayWithoutAll.map((category) =>
    (<option key = {category} value = {category}>{category}</option>)
    //.filter((category) => category != "All")
  );
  function onChangeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  }
  function onTaskFormSubmit(e){
    e.preventDefault();
    onSubmitHandler(formData);
  }
  return (
    <form className="new-task-form" onSubmit = {onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value = {formData.text} onChange = {onChangeHandler}/>
      </label>
      <label>
        Category
        <select name="category" value = {formData.category} onChange = {onChangeHandler}>
          {categoriesArray}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
