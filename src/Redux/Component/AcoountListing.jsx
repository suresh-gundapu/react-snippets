import React from "react";
import { useSelector } from "react-redux";

let AccountListing = () => {
  const useSelect = useSelector((state) => {
    return state.accountReducer;
  });

  return (
    <>
      <div className="header">
        <h4>Account Listing</h4>
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-stripped m-auto">
            <tr className="thead">
              <th>Name</th>
              <th>Mobile</th>
              <th>Balance</th>
            </tr>
            <tr className="tbody">
              <td>{useSelect.name}</td>
              <td>{useSelect.mobile}</td>
              <td>{useSelect.balance}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default AccountListing;