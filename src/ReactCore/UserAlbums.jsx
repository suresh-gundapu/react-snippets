import React, { useEffect, useState } from "react";
import "../Style.css";
import { Services } from "../Services/Services";
import { Link } from "react-router-dom";
let UserAlbums = () => {
  let [UserAlbums, setUserAlbums] = useState([]);
  let [isError, setIsError] = useState({ status: false, message: "" });

  useEffect(() => {
    (async () => {
      setIsError({ status: false, message: "" });
      try {
        let responseData = await Services.getUsersAlbums();
        let dataJson = await responseData.json();
        setUserAlbums(dataJson);
        setIsError({ status: false, message: "" });
        if (responseData.status === 404) {
          throw new Error("Data not found");
        }
      } catch (error) {
        setIsError({
          status: true,
          message: error.message || "Something went wrong!!",
        });
      }
    })();
  }, []);
  return (
    <>
      <div className="header">
        <h1>User Albums</h1>
      </div>

      <div className="main">
        {!isError?.status ? (
          <div className="content">
            {UserAlbums.map((eachObj) => {
              return (
                <div className="album" key={eachObj.id}>
                  <h3>{eachObj.title}</h3>
                  <p>{eachObj.body}</p>
                  <Link
                    to={`/userAlbumsDetails/${eachObj.id}`}
                    className="text-secondary"
                  >
                    Readmore
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <span className="text-danger text-center">{isError.message}</span>
        )}
      </div>
    </>
  );
};

export default UserAlbums;
