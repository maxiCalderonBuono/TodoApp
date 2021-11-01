import React from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

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

    handleAddTodo(newTodo)

    reset();
  };

  return (
    <>
      <h4>Add Task</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="description"
          autoComplete="off"
          placeholder="Your task"
          value={description}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-success mt-2 col-12">
          Add
        </button>
      </form>
    </>
  );
};
