import React, { useEffect, useReducer } from "react";
import "./todo.css";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";

const init =() => {
  return JSON.parse(localStorage.getItem('todos')) || [] ;
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{description}, handleInputChange, reset] = useForm({
    description: "",
  });


  useEffect (()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

 const handleDelete= (todoId) => {

    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  } 

  const handleToggle = (todoId) => {
    dispatch ({
      type: 'toggle',
      payload: todoId
    })
  }
 
 
  return (
    <>
      <h1>
        ToDo App <small>({todos.length})</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleToggle= {handleToggle} handleDelete= {handleDelete}/>
        </div>
        <div className="col-5">
          <h4>Add Task</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="description"
              autoComplete="off"
              placeholder="Your task"
              value= {description}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-success mt-2 col-12">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
