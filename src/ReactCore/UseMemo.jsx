import React, { useState, useRef, useEffect, useMemo } from "react";
/**
 useMemo:
=> it works on functions it return value 
=> it takes two arguments , first one  is call back function and second one dependensies 
This hook returned memorizewd return value of the function to prevent repeated execution of the function

this is normal function in comp
let myResult=(()=>{

return result

})();

this is useMemo hook function in comp
let myResult=useMemo(()=>{
return result;
},[dependensies])();

How it works :
=============

same as useCallback hook

When to use this hook?
=====================
when your function doessome expensive task (hevier code with complex caluculations ) and being render on each execution 

note: avoid using useMemo when your function is smaller
 */
let UseMemo = () => {
  let [count, setCount] = useState(1);

  let [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(count);
  }, [count]);

  let handleSubmit = () => {
    setDark(!dark);
  };
  let themeChange = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("this is theme changed");
  }, [themeChange]);

  return (
    <>
      <div className="header">
        <h1>UseRef - count of renders component</h1>
      </div>
      <div className="main">
        <div className="card">
          <div className="card-body">
            <input
              className="form-control"
              type="number"
              value={count}
              onChange={(e) => {
                setCount(Number(e.target.value));
              }}
            />
            <button
              className="btn btn-primary my-4"
              onClick={() => {
                handleSubmit();
              }}
            >
              Change Theme
            </button>
            <h2 style={themeChange}>{doubleNumber}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
let slowFunction = (number) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log("this is slowfunction");
  return number * 2;
};

export default UseMemo;
