import React, { useState, useEffect } from "react";
import { Services } from "../Services/Services";

import "../Style.css";

const UsersList = () => {
  let [usersData, setUserdata] = useState([]);

  let [loader, setLoader] = useState(false);

  let [isError, setIsError] = useState({ status: false, message: "" });

  useEffect(() => {
    setLoader(true);
    setIsError({ status: false, message: "" });
    (async () => {
      try {
        let userDataResponse = await Services.getUsersData();
        let usersData = await userDataResponse.json();
        setUserdata(usersData);
        setLoader(false);
        setIsError({ status: false, message: "" });
        if (userDataResponse.status === 404) {
          throw new Error("Data not found");
        }
      } catch (error) {
        setLoader(false);
        setIsError({
          status: true,
          message: error.message || "Something went wrong try again",
        });
      }
    })();
  }, []);
  if (loader) {
    return <div>loading...</div>;
  }
  return (
    <>
      <h1 className="header"> Users List From JSON Place holder API</h1>
      <div className="main">
        {!isError?.status && (
          <table className="table bordered">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((eachObj, i) => {
                const { id, name, username, email, address, phone } = eachObj;
                return (
                  <tr key={i + 1}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{address.city}</td>
                    <td>{phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UsersList;
