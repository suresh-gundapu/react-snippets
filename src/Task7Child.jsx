import React, { useState } from "react";

let Task7Child = (props) => {
  let [color, setColor] = useState();
  props.colorCode(color);
  return (
    <>
      <div className="text-center text-success my-4">
        <h5>This is Child Comp - color pickerrr</h5>
      </div>
      <div className="my-4 ms-4">

        <input type="color" className="form-control" value={color} onChange={(e) => {
          setColor(e.target.value);
        }} />

      </div>
    </>
  )
}
export default Task7Child;