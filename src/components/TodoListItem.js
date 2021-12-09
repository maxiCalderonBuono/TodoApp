import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";
import "animate.css";

export const TodoListItem = ({
  todo,
  index,
  handleDelete,
  handleToggle,
  handleEdit,
  desc,
}) => {
  const [click, setClick] = useState(false);

  const [{ description }, handleInputChange, reset] = useForm({
    description: desc,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    handleEdit(click, description);

    setClick(!click);

    reset();
  };


  const handleElimination = (todoId) => {
      
    handleDelete(todoId, click, setClick)
       
  }
 

  return click ? (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        name="description"
        autoComplete="off"
        placeholder={desc}
        value={description}
        onChange={handleInputChange}
        autoFocus
        onBlur={() => setClick(!click)}
      />
    </form>
  ) : (
    <li
      className={
        "list-group-item list-group-item-action list-group-item-light" +
        (click ? " animate__animated animate__fadeOut" : " animate__animated animate__fadeIn")
      }
      key={todo.id}
     
    >
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}.{todo.desc}
      </p>
      <div>
        <button
          type="submit"
          className="btn btn-primary btn-sm me-1"
          onClick={() => setClick(todo.id)}
        >
          <i className="far fa-edit" />
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleElimination(todo.id)}
        >
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </li>
  );
};

TodoListItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
