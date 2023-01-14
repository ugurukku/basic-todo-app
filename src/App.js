
import { useState } from 'react';
import './App.css';
import CounterValue from './components/CounterValue';
import CounterButtons from './components/CounterButtons';
import TodoField from './components/TodoField';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "GYM",
      status: false,
    },
    {
      id: 2,
      name: "study",
      status: false,
    }
  ]);

  const addTodo = (todo) => {
    if (todo.name) {
      setTodos([...todos, todo]);
    }
  };


  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
  });

  setTodos(newTodos);
  };

  const doneTodo = (id) =>{
     let currentTodo = todos.find((todo) => todo.id === id);
     currentTodo.status = true;
     setTodos([...todos]);
    }
  ; 

  return (
    <div className="App">
      <h1 >TODOS</h1>
      <TodoField addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} doneTodo={doneTodo}/>
      <CounterValue></CounterValue>
      <CounterButtons></CounterButtons>
    </div>
  );
}

export default App;
