import React, { useState, useEffect } from "react";
import { Services } from "../Services/Services";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductListing = () => {
  let [products, setProducts] = useState([]);
  let [isError, setIsError] = useState([{ status: false, message: "" }]);

  useEffect(() => {
    (async () => {
      try {
        let resposeBody = await Services.getProductsData();
        let resposeBodyResult = await resposeBody.json();
        if (resposeBodyResult.status !== 404) {
          setProducts(resposeBodyResult);
          setIsError({ status: false, message: "" });
        } else {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        setIsError({ status: true, message: error.message });
      }
    })();
  }, []);
let handleDelete =async (id)=>{
  let response = await Services.getProductDelete(id);
  if(response.ok){
    let result = await Swal.fire({
      icon:"warning",
      title:"Are  sure to delete",
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:"Yes delete"
    });
    if(result.isConfirmed){
      let finalResult = products.filter((p)=>{
          return p.id !== products.id;
      }) ;
      setProducts(finalResult);
      Swal.fire({
        icon: "success",
        text: "Deleted",
      });
    }
  }
}
  return (
    <>
      <div className="header">
        <h1>Products List</h1>
      </div>
      <div className="main">
        <div><Link to="/productAdd"><button className="btn btn-primary">Add</button></Link></div>
        <div className="m-4">
          {!isError?.status ? (
            <table className="table table-bordered table-stripped table-dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>ProductName</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {products.map((p) => {
                  const { id, name, cat, price } = p;
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{cat}</td>
                      <td>{price}</td>
                      <td><Link to={`productEdit/${id}`}><button className="btn btn-primary rounded-circle me-2">Edit</button></Link><button className="btn btn-danger rounded-circle me-2" onClick={()=>handleDelete(id)}>Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1>{isError.message}</h1>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductListing;
