import React from "react";
import AccountForm from "./AccountForm";
import AccountListing from "./AcoountListing";
import TransactionList from "./TransactionList";

let AccountFinal = ()=>{

  return (
    <>
    <div className="header">
      <h1>User Bank Account Information </h1>
    </div>
    <div className="main">

      <AccountForm/>
      <AccountListing/>
      <TransactionList/>

    </div>
    </>
  )

}
export default AccountFinal;