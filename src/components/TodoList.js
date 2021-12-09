import React from "react";
import { TodoListItem } from "./TodoListItem";
import PropTypes from "prop-types";




export const TodoList = ({ todos, handleToggle, handleDelete, handleEdit }) => {
  return (
    <ul className="list-group">

      {todos.map((todo, i) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            handleEdit={handleEdit}
            desc={todo.desc}
          />
       
      ))}
       
    </ul>
  );
};

TodoList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
