import React, { useState } from "react";

let Task6Child = (props) => {
  return (
    <div className="text-center">
      <div className="card shadow my-2">
        <div className="card-header">
          <h1 className="text-danger">
            Basic Example Of useState - Prop Drill parent to child
          </h1>
        </div>
        <div className="card-body">
          <div className="row">
            {
              props.userData.map((eachObj) => (
                <div className="col-sm-2 col-md-4 col-xl-4 col-lg-4" key={eachObj.id}>
                  <div className="m-2">
                    <img src={eachObj.pic} alt="pic" style={{ width: 200 }} />
                  </div>
                  <div className="m-2">
                    Name: {
                      eachObj.name
                    }
                  </div>
                  <div className="m-2">
                    Location: {
                      eachObj.location
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Task6Child;