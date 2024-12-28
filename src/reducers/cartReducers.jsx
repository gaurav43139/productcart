import React from 'react'

function cartReducers(state,action) {
    switch(action.type){
        case "ADD_PRODUCTS":
            return{...state,prod:action.payload}
        case "ADD_TO_CART":
            return {...state,carts:[...state.carts,action.payload]}
        case "REMOVE_FROM_CART":
            return {...state,carts:state.carts.filter((it)=>it.id!==action.payload)}
        case "CHANGE_CART_QTY":
            return {...state,carts:state.carts.map((it)=>{
                if(it.id===action.payload.id){
                    return {...it,qty:action.payload.qty}
                }
                else{
                    return it
                }
            })}
        default:
            break;
    }
  
}

export default cartReducers
