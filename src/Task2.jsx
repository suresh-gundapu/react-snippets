import React, { useState } from "react";
const Task2 = () => {
    let[count , setCount] = useState(0);

let handleCounterupdate = ()=>{
    setCount((prevState)=>{
        return count+1;
    });
}
let handleCounterupdate2 = ()=>{
    setCount((prevState)=>{
        return count-1;
    });
}
    return (
        <div className="text-center">
            <div className="card shadow my-2">
                <div className="card-header">
                    <h1 className="text-primary">
Increment and Decrement By using HOOKS(usestate)                   
</h1>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                                {count}
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <button className="btn btn-success" onClick={()=>{
                                handleCounterupdate()
                            }}>
                                +
                            </button>&nbsp;
                            <button className="btn btn-danger" onClick={()=>{
                                handleCounterupdate2()
                            }}>
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task2;