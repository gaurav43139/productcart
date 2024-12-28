import React, { useEffect, useState } from 'react'

function Cart({state,dispatch}) {
    const [total,setTotal]=useState(0)

    function handleClick(id,qty){
        if(qty===0){
            dispatch(
                {type:"REMOVE_FROM_CART",
                payload:id})
        }
        dispatch({
            type:'CHANGE_CART_QTY',
            payload:{
                id:id,
                qty:qty,
            }
        })
    }
    useEffect(()=>{
        setTotal(state.carts.reduce((acc,curr)=>acc+Number(curr.price)*curr.qty,0))
    })


  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        margin:10,
        backgroundColor:'#ececec',
        padding:10,
        width:'20%',
        border:'2px solid black'
    }}>
        <b style={{alignSelf:'center'}}>CART</b>
        <b style={{alignSelf:'center'}}>SubTotal:{total.toFixed(2)}</b>
      {state.carts.map((item)=>(
        <div style={{display:'flex',flexDirection:"column",border:'1px solid black'}}>
            <img src={item.thumbnail} style={{height:100,objectFit:'contain'}}/>
            <span>{item.title}</span>
            <div>
                <button onClick={()=>handleClick(item.id,item.qty+1)}>'+'</button>
                <span>{ item.qty} * { item.price}</span>
                <button onClick={()=>handleClick(item.id,item.qty-1)}>'-'</button>
                <span style={{display:'block'}}>{item.qty*item.price}</span>
            </div>
            
            
        </div>
      ))}
    </div>
  )
}

export default Cart
