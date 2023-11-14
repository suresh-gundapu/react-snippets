import React, { useState , useRef} from "react";
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

export default UseMemo;