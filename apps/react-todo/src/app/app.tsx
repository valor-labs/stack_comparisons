import React, {useState} from "react";

import {Task} from "./models/task";

function App() {
  const [todos, setTodos] = useState([{id: 0, name: 'Starting Item'}] as Array<Task>);

  const addTodo = (name: string): void => {
    const newTodos: any = [...todos, {name}];
    setTodos(newTodos);
  }

  const removeTodo = (index: number): void => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  return (
    <div>
      <h2>Hello React TS!</h2>
      <TodoForm addTodo={addTodo}/>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

function Todo({todo, index, removeTodo}: any) {
  return (
    <li>
      {todo.name}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  )
}

function TodoForm({addTodo}: any) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
