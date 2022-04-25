import { component$, useStore } from '@builder.io/qwik';
import type { Todos } from './state/state';

export const Main = component$(() => {
  const state = useStore({ text: '' });
  const todos = useStore<Todos>({
    items: [
      { index: 0, name: 'Starting Item' }
    ],
  });
  return (
    <div>
      <h2>Hello QWIK</h2>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={state.text}
        onKeyup$={(event: any) => {
          const inputValue = (event.target as HTMLInputElement).value;
          state.text = inputValue;
          if (event.key === 'Enter' && inputValue) {
            todos.items.push({
              index:1,
              name: state.text,
            });
            state.text = '';
          }
        }}
      />
      <ul className="todo-list">
        {todos.items.map((todo) => (
          <li>{todo.name}<button
            onClick$={() => {
              const todoItem = todo;
              todos.items = todos.items.filter((i) => i != todoItem);
            }}
          >Delete</button></li>
        ))}
      </ul>
    </div>
  );
});
