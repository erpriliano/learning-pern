import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const InputTodo = () => {
    const uuid = uuidv4();
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {
                todo_id: uuid,
                description: description,
            };
            await fetch("http://localhost:5000/todos", {
                method: "POST",
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
            <h1 className="text-center mt-5">PERN Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={(e) => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </React.Fragment>
    );
};

export default InputTodo;