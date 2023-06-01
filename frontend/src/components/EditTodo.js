import React, { useState } from 'react';

const EditTodo = ({ todoId }) => {
  const [description, setDescription] = useState('');

  const getTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`);
      const jsonData = await response.json();
      setDescription(jsonData.description);
    } catch (err) {
      console.error(err.message);
    }
  };

  const editTodo = async (e, id) => {
      e.preventDefault();
      try {
        const body = { description };
        await fetch(`http://localhost:5000/todos/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        setDescription("");
        window.location = "/";
    } catch (err) {
        console.error(err.message)
    }
  }

  return (
    <React.Fragment>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target={`#todoid-${todoId}`} // data-bs-target needs to match with the id in the modal below
        onClick={() => getTodo(todoId)}
      >
        Edit
      </button>

      <div className='modal' id={`todoid-${todoId}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Edit Todo</h4>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
              ></button>
            </div>

            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onBlur={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' onClick={(e) => editTodo(e, todoId)}>
                Save
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditTodo;
