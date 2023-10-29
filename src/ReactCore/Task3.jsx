import React, { useState } from "react";
import Swal from "sweetalert2";

const Task3 = () => {
  let [count, setCount] = useState(0);
  let handleCounterIncrement = () => {
    setCount((prevState)=>{
      return count++;
    })
  }
  let handleCounterDecrement = () => {
    setCount((prevState)=>{
      if(prevState > 0){
        return count--;
      }else{
        Swal.fire({
          title:"You never decrease more than 0",
          icon:'warning',
          timer:2000
        })
        return 0;
      }
    })
  }
  return (
    <div className="text-center">

      <div className="card shadow my-2">
        <div className="card-header">
          <h1 className="text-danger">
            Basic Example Of useState - Cart App
          </h1>
        </div>
        <div className="card-body">
          <div className="row">


          </div>
          <div className="row my-2">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="mt-2 d-flex  justify-content-center">

                <div className="m-2">
                  <button className="btn btn-primary" onClick={() => {
                    handleCounterIncrement()
                  }}>
                    ++
                  </button>
                </div>

                <div className="m-2">
                  {count}

                </div>

                <div className="m-2">
                  <button className="btn btn-primary" onClick={() => {
                    handleCounterDecrement()
                  }}>
                    --
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Task3;