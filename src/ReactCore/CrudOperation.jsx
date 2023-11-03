import React from "react";
import { Link } from "react-router-dom";

let CrudOperation = () => {
  return (
    <>
      <div className="header">
        <h1>User Data CRUD Operation</h1>
        <div className="main">
          <div className="text-start">
            <Link to="/userAdd">
              <button className="btn btn-primary m-4">Add User</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudOperation;
