import { createStore } from "redux";

import allReducers from "../Reducer";

import { composeWithDevTools } from "redux-devtools-extension";
export var store = createStore(allReducers, composeWithDevTools());
