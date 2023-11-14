import { todoReducer } from "./todo_reducer";
import { AcountReducer } from "./AccountReducer";
import { TransactionReducer } from "./TransactionReducer";
import { combineReducers } from "redux";

var allReducers = combineReducers({ todoApp: todoReducer,accountReducer:AcountReducer, transactionReducer:TransactionReducer });

export default allReducers;
