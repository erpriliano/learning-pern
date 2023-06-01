import React, { useState, useEffect } from 'react';

import EditTodo from './EditTodo';

const ListTodos = () => {
  const [data, setData] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
        await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        });

        setData(data.filter(todo => todo.todo_id !== id));
    } catch (err) {
        console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <React.Fragment>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{todo.description}</td>
                <td><EditTodo todoId={todo.todo_id} /></td>
                <td><button type='button' className='btn btn-danger btn-sm' onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ListTodos;
