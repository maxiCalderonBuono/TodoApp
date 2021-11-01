import React from 'react'
import PropTypes from "prop-types";

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <li
        className="list-group-item list-group-item-action list-group-item-light"
        key={todo.id}
      >
        <p className={`${todo.done && 'complete'}`} onClick= {()=>handleToggle(todo.id)}>
          {index + 1}.{todo.desc}
        </p>
        <button className="btn btn-danger btn-sm" onClick = {()=> handleDelete(todo.id)}>Remove</button>
      </li>
    )
}

TodoListItem.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}

