import React, { useState } from "react";
import Task7Child from "./Task7Child";

let Task7 = () => {
  let [color, setColor] = useState();

  let colorHandle = (color) => {

    setColor(color)

  }

  return (
    <div className="text-center">
      <div className="card shadow my-2">
        <div className="card-header">
          <h1 className="text-danger">
            Basic Example Of useState - Prop Drill  child parent
          </h1>
        </div>
        <div className="card-body">
          <h5>
            This is Parent Div
          </h5>
          <div className="p-4 text-white m-auto" style={{ height: 200, width: 200, backgroundColor: `${color}` }}>

            This is Parent Div

          </div>
          <Task7Child colorCode={colorHandle} />

        </div>
      </div>
    </div>
  )

}

export default Task7;