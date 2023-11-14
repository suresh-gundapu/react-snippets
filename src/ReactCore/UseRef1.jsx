import React, { useState, useRef } from "react";

// useRef used for 2 scenarios

/**
 1) access for DOM elements 
 2) it preseved the dom elements even re-render componennt means when comp render , the intial value changet and fixed to intial values but useRef strores previous 
 updated value 
 => it returns object with key value pair and here fixed key is current 

 by using this object we can assign to any element in DOM and access and modify here we are taking one example when i clik on button showing to focus button 
 */

let UseRef1 = () => {
  let inputDom = useRef();
  let handleClick = () => {
    inputDom.current.focus();
    inputDom.current.value = "suresh";
  };
  return (
    <>
      <div className="header">
        <h1>useRef hook access dom elements</h1>
      </div>
      <div className="main ">
        <div className="card ">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="text" className="form-control" ref={inputDom} />
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleClick();
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UseRef1;
