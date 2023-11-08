import { todoReducer } from "./todo_reducer";

import { combineReducers } from "redux";

var allReducers = combineReducers({ todoApp: todoReducer });

export default allReducers;
