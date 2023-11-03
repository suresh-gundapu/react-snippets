import React, { useState } from "react";
import "../Style.css";
import Swal from "sweetalert2";

let ToDoList = () => {
  let [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Angular Project",
    },
    {
      id: 2,
      name: "React Project",
    },
  ]);

  let [todoInput, setTodoInput] = useState("");
  let [todoId, setTodoId] = useState(3);
  let addTodo = () => {
    setTodoId(todoId + 1);
    if (todoInput === "") {
      Swal.fire({
        title: "Alert",
        text: "Please Enter Text",
        icon: "warning",
      });
    } else {
      setTodoList([
        ...todoList,
        {
          id: todoId,
          name: todoInput,
        },
      ]);
      setTodoInput("");
    }
  };
  let deleteList = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      var newData = todoList.filter((eachObj) => {
        return eachObj.id !== id;
      });
      setTodoList(newData);
      Swal.fire({
        text: "Data deleted",
        icon: "success",
      });
    }
  };
  return (
    <>
      <h1 className="header"> To DO List App</h1>
      <div className="main">
        <div className="card">
          <div className="card-body">
            <div className="input-group">
              <input
                className="form-control"
                value={todoInput}
                onChange={(e) => {
                  setTodoInput(e.target.value);
                }}
              />
              <button
                className="btn btn-primary input-group-text"
                onClick={() => {
                  addTodo();
                }}
              >
                Add
              </button>
            </div>
            <div className="my-2 p-2">
              <div className="list-group">
                {todoList.map((eachObj) => {
                  return (
                    <li
                      className="list-group-item d-flex justify-content-between"
                      key={eachObj.id}
                    >
                      <p>{eachObj.name} </p>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          deleteList(eachObj.id);
                        }}
                      >
                        X
                      </button>
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
