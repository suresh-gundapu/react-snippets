import React, { useState, useEffect } from "react";
import "../Style.css";
import { Services } from "../Services/Services";
import { useParams } from "react-router-dom";
let UserAlbumsDetails = () => {
  const { id } = useParams();
  let [albumDetails, setUserAlbumDetail] = useState([]);
  let [isError, setIsError] = useState({
    status: false,
    msg: "",
  });

  useEffect(() => {
    setIsError({ status: false, msg: "" });

    (async () => {
      try {
        let responseData = await Services.getUsersAlbumDetails(id);
        let responseFinal = await responseData.json();
        setUserAlbumDetail(responseFinal);
        setIsError({ status: false, msg: "" });
        if (responseData.status === 404) {
          throw new Error("no data found");
        }
      } catch (error) {
        setIsError({
          status: true,
          msg: isError.msg || "Something went wrong",
        });
      }
    })();
  }, []);
  return (
    <>
      <div className="header">
        <h1>User Albums Details</h1>
        <div className="main">
          {!isError?.status ? (
            <div className="card  m-4">
              <div className="card-header">{albumDetails.title}</div>
              <div className="card-body">{albumDetails.body}</div>
            </div>
          ) : (
            <span className="text-danger text-center">{isError.msg}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAlbumsDetails;
