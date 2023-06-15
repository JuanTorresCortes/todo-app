import React from "react";
import TodoCard from "../TodoCard";

const TodoPage = ({ todoList, handleDeleteTodo, toggleCompleted, handleUpdatedTodo}) => {
  return (
    <div>
      <h1>to-dos:</h1>
      {todoList.map((todo) => {
        return (
          <TodoCard
            key={todo.date}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            toggleCompleted={toggleCompleted}
            handleUpdatedTodo={handleUpdatedTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoPage;
