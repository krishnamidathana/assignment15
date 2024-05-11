import React, { useState } from "react";
import TodoRow from "./components/todoRow/TodoRow";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Meeting", completed: false },
    { id: 2, text: "Travel", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText("");
    }
  };

  return (
    <div className="app h-screen flex flex-col justify-center items-center bg-yellow-100 ">
      <div className="bg-white w-96 h-96 p-4 rounded-lg flex flex-col   ">
        <h1 className="text-xl font-bold  mb-9">Todo</h1>

        <div className="todos overflow-auto flex justify-between flex-col    ">
          {todos.map((todo) => (
            <TodoRow key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
          ))}
        </div>
      </div>
      <div className="flex items-center mt-1 gap-2  bg-white w-96  p-4 rounded-lg ">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter a new todo"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none flex-grow bg-slate-200"
        />
        <button
          onClick={handleAddTodo}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800 focus:outline-none"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
