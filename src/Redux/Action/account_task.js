import * as actionTypes from '../Constant/action-types';
export const deposite = (deposite)=>{
  return {
    type:actionTypes.DEPOSITE,
    payload:deposite
  }
}
export const withdraw = (withdraw)=>{
  return {
    type:actionTypes.WITHDRAW,
    payload:withdraw
  }
}
export const name = (name)=>{
  return {
    type:actionTypes.NAME,
    payload:name
  }
}
export const mobile = (mobile)=>{
  return {
    type:actionTypes.MOBILE,
    payload:mobile
  }
}
export const addTransactions = (addTrans)=>{
return {
  type:actionTypes.TRANSACTIONS,
  payload:addTrans
}
}   