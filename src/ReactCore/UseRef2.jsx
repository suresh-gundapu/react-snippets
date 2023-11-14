import React, { useState , useRef} from "react";

let UseRef2 = () => {
  let [count, setCount] = useState(1);
  let inputDom = useRef(count);
  let handleSubmit = () => {
    setCount((prevState)=>prevState+1);
  };
  return (
    <>
      <div className="header">
        <h1>UseRef - count of renders component</h1>
      </div>
      <div className="main">
        <div className="card text-center">
          <h2>Count:{count}</h2>
          <h2>Count:{inputDom.current}</h2>

          <button
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Click
          </button>
        </div>
      </div>
    </>
  );
};

export default UseRef2;