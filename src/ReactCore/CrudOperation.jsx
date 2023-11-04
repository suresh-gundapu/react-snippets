import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Services } from "../Services/Services";
import Swal from "sweetalert2";

let CrudOperation = () => {
  let [usersData, setUsersData] = useState([]);
  let [isError, setIsError] = useState({ status: false, msg: "" });

  useEffect(() => {
    (async () => {
      try {
        let responseData = await Services.getUsers();
        let responseDataJson = await responseData.json();
        setUsersData(responseDataJson);
        setIsError({ status: false, msg: "" });
      } catch (error) {
        setIsError({
          status: true,
          msg: error.message || "Something went wrong",
        });
      }
    })();
  }, []);
  let handleUserDelete = async (id) => {
    const result = await Swal.fire({
      icon: "warning",
      title: "Are You sure to delete",
      text: "you wont get it back",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      var response = await Services.getUserDelete(id);
      if (response.ok) {
        let alluserData = usersData.filter((eachObj) => {
          return eachObj.id !== id;
        });
        setUsersData(alluserData);

        Swal.fire({
          icon: "success",
          text: "Deleted",
        });
      }
    }
  };
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
          <div className=" mt-2">
            {!isError?.status ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((eachObj, i) => {
                    const { id, Name, Email, Mobile } = eachObj;
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{Name} </td>
                        <td>{Email} </td>
                        <td>{Mobile} </td>
                        <td>
                          <Link to={`/userEdit/${id}`}>
                            {" "}
                            <button className="btn btn-success me-2">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleUserDelete(id);
                            }}
                          >
                            {" "}
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <span className="text-danger">{isError.msg}</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CrudOperation;
