import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import actions from "../Action";
import Swal from "sweetalert2";
let AccountForm = () => {
  let [depositeBalance, setDepositeBalance] = useState("");
  let [withdrawBalance, setWithdrawBalance] = useState("");
  let [transId, setTransId] = useState(1);
  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let despatch = useDispatch();
  let data = useSelector((state) => {
    return state.accountReducer;
  });
  let handleDeposte = () => {
    setTransId(transId + 1);
    despatch(actions.deposite(depositeBalance));
    despatch(
      actions.addTransactions({
        id: transId,
        amount: depositeBalance,
        type: "CREDIT",
        trdate: new Date(),
        name: name,
      })
    );
  };
  let handleWithdraw = () => {
    setTransId(transId + 1);

    if (data.balance > 0) {
      despatch(actions.withdraw(withdrawBalance));
      despatch(
        actions.addTransactions({
          id: transId,
          amount: withdrawBalance,
          type: "DEBITE",
          trdate: new Date(),
          name: name,
        })
      );
    } else {
      Swal.fire({
        icon: "error",
        text: "Your account has insufficient balance",
      });
    }
  };
  let handleName = () => {
    despatch(actions.name(name));
  };
  let handleMobile = () => {
    despatch(actions.mobile(mobile));
  };
  return (
    <>
      <div className="header">
        <h4>Account Details Add</h4>
      </div>
      <div className="card">
        <div className="card-body formData">
          <div className="mb-3 input-group">
            <label className="form-label">Name :</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              className="btn btn-primary input-group-text"
              onClick={() => {
                handleName();
              }}
            >
              UPDATE
            </button>
          </div>
          <div className="mb-3 input-group">
            <label className="form-label">Mobile :</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <button
              className="btn btn-primary input-group-text"
              onClick={() => {
                handleMobile();
              }}
            >
              UPDATE
            </button>
          </div>
          <div className="mb-3 input-group">
            <label className="form-label">Account Balance Deposite :</label>
            <input
              type="text"
              className="form-control"
              value={depositeBalance}
              onChange={(e) => {
                setDepositeBalance(e.target.value);
              }}
            />
            <button
              className=" btn btn-success input-group-text"
              onClick={() => {
                handleDeposte();
              }}
            >
              DEPOSITE
            </button>
          </div>
          <div className="mb-3 input-group">
            <label className="form-label">Account Balance Withdraw :</label>
            <input
              type="text"
              className="form-control"
              value={withdrawBalance}
              onChange={(e) => {
                setWithdrawBalance(e.target.value);
              }}
            />
            <button
              className="btn btn-danger input-group-text"
              onClick={() => {
                handleWithdraw();
              }}
            >
              WITHDRAW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AccountForm;
