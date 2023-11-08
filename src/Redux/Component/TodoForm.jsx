import React, { useState } from "react";
import Swal from "sweetalert2";

import actions from "../Action";
import { useDispatch } from "react-redux";

const TodoForm = (props) => {
  let despatch = useDispatch();
  let [todoInput, setTodoInput] = useState("");
  let [todoId, setTodoId] = useState(4);
  let handleAdd = () => {
    setTodoId(todoId + 1);
    if (todoInput.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please enter text",
      });
    } else {
      var newTodo = {
        id: todoId,
        title: todoInput,
      };
      despatch(actions.addTodo(newTodo));
      setTodoInput("");
    }
  };
  return (
    <div className="card m-3">
      <div className="card-body">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
          />
          <button
            className="btn btn-primary input-group-text"
            onClick={() => handleAdd()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
