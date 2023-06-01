import React from 'react';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodo';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </React.Fragment>
  );
}

export default App;
