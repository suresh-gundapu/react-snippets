import { AccountIntials } from "../Data/AccountIntials";
import * as actionTypes from "../Constant/action-types";

export const AcountReducer = (state = AccountIntials, action) => {
  switch (action.type) {
    case actionTypes.DEPOSITE:
      return {
        ...state,
        balance: state.balance + +action.payload,
      };
    case actionTypes.WITHDRAW:
      return {
        ...state,
        balance: state.balance - +action.payload,
      };
    case actionTypes.NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actionTypes.MOBILE:
      return {
        ...state,
        mobile: action.payload,
      };
      default:
        return state;
  }
};
