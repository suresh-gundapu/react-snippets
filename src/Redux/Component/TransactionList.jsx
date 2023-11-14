import React from "react";
import { useSelector } from "react-redux";

let TransactionList = () => {
  let transData = useSelector((state) => {
    return state.transactionReducer;
  });

  return (
    <>
      <div className="header">
        <h4>Transaction History</h4>
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-stripped m-auto">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transData.map((eachObj,index) => {
                return(
                  <tr key={index}>
                    <td>{eachObj.id}</td>
                    <td>{eachObj.name}</td>
                    <td>{eachObj.amount}</td>
                    <td>{eachObj.type}</td>
                    <td>{eachObj.trdate.toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default TransactionList;
