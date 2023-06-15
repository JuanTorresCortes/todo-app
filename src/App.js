import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoPage from "./components/Pages/TodoPage";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleNewTodo = (todo) => {
    const newTodo = {
      todo: todo,
      completed: false,
      date: new Date().toISOString(),
    };

    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    // this method creates a new array and returns an array that has specific condition
    const remainingTodo = todoList.filter((todo) => {
      return todo.date !== id;
    });
    setTodoList(remainingTodo);
  };

  const toggleCompleted = (id) => {
    const updatedTodo = todoList.map((todo) => {
      if (id === todo.date) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(updatedTodo);
  };

  const handleUpdatedTodo = (id, updatedItem) => {
    // Map through the todoList array
    const updatedTodo = todoList.map((todo) => {
      // Check if the date/id of the todo item matches the provided id
      if (id === todo.date) {
        // If there is a match, create a new object with the updated todo
        return { ...todo, todo: updatedItem };
      }
      // If no match, return the original todo item
      return todo;
    });

    // Update the todoList state with the new array containing the updated todo
    setTodoList(updatedTodo);
  };

  return (
    <div className="App">
      <h1>Todo-App</h1>
      <Form handleNewTodo={handleNewTodo} />
      <TodoPage
        todoList={todoList}
        handleDeleteTodo={handleDeleteTodo}
        toggleCompleted={toggleCompleted}
        handleUpdatedTodo={handleUpdatedTodo}
      />
    </div>
  );
}

export default App;
