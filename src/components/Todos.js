import React from 'react'

const Todos = ({ todos,removeTodo,doneTodo }) => {

  return todos.length > 0 ? (
    <ul className='todos'>
      {
        todos.map(todo =>
        (
          <li key={todo.id} className="todos_item">
            <span className={todo.status?'todos__text todos__text--done':'todos__text'}>
              {todo.name}
            </span>
            <div className="todos_buttons">
              <button onClick={() => removeTodo(todo.id)}>❌</button>
              <button onClick={() => doneTodo(todo.id)} disabled={todo.status} href="#">✅</button>
            </div>
          </li>
        )
        )
      }

    </ul>) : null;

}

export default Todos
