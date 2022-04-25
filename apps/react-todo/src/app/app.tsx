import React, {useState} from "react";
import {Task} from "./models/task";

function App() {
  const [value, setValue] = React.useState("");
  const [todos, setTodos] = useState<Array<Task>>([{id: 0, name: 'Starting Item'}]);

  const addTodo = (name: string): void => {
    const newTodos: any = [...todos, {name}];
    setTodos(newTodos);
  }

  const removeTodo = (index: number): void => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  const add50k = ():void => {
    const newTodos: any = [...todos, {name}];
    let i = 50000
    while (i > 0) {
      newTodos.push({id:i, name:'adding item'});
      i--;
    }
    setTodos(newTodos);
  }

  return (
    <div>
      <h2>Hello React TS!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
      </form>
      <button onClick={add50k}>Add 50,000 Todos</button>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo.name}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
