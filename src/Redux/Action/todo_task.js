import * as actionTypes from '../Constant/action-types';

export const addTodo = (addTodo)=>{
  return {
    type: actionTypes.ADD_TODO,
    payload:addTodo
  }
}

export const deleteTodo = (deleteTodo)=>{

return {

  type:actionTypes.DELETE_TODO,
  payload:deleteTodo
}
}
