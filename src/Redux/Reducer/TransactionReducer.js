import * as actionTypes from '../Constant/action-types';

export const TransactionReducer = (state = [] , action)=>{

  switch(action.type){
    case actionTypes.TRANSACTIONS:
      return [...state,{id:action.payload.id,amount:action.payload.amount,type:action.payload.type,trdate:action.payload.trdate,name:action.payload.name}];
      default:
      return   state;

  }
}   