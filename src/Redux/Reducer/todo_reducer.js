import { TodoIntial } from "../Data/TodoIntial";
import * as actionTypes from "../Constant/action-types";
export const todoReducer = (state = TodoIntial, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.DELETE_TODO:
      return state.filter((eachObj) => eachObj.id !== action.payload);
    default:
      return state;
  }
};
