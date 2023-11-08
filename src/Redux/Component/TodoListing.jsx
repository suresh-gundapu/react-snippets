import React from "react";
import TodoForm from "./TodoForm";
import { useSelector, useDispatch } from "react-redux";
import actions from "../Action";
import Swal from "sweetalert2";
const TodoListing = (props) => {
  let todoListing = useSelector((state) => {
    return state.todoApp;
  });
  console.log(todoListing);
  var despatch = useDispatch();
  const handleDelete = async (id) => {
    let result = await Swal.fire({
      icon: "warning",
      text: "Are you sure to delete",
      showConfirmButton: true,
      showCancelButton: true,
    });
    if (result.isConfirmed) {
      despatch(actions.deleteTodo(id));
    }
  };
  return (
    <>
      <div className="header">
        <h1>TO DO App Using REDUX</h1>
      </div>
      <div className="main">
        <TodoForm />
        <div className="card m-3">
          <div className="card-body">
            <ul className="list-group ">
              {todoListing.map((eachObj, index) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={index}
                  >
                    <p>{eachObj.title}</p>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(eachObj.id);
                      }}
                    >
                      x
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListing;
