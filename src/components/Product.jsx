import React from 'react'

function Product({state,dispatch}) {
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',width:'80%'}}>
     {state.prod.map((item)=>(
        <div
         key={item.id}
         style={{
            display:'flex',
            flexDirection:'column',
            padding:10,
            border:'1px solid black',
            width:'30%',
            marginTop:10,
            gap:10
         }}
        >
            <img src={item.thumbnail} alt={item.title} style={{height:'200px',objectFit:'cover'}} />
            <span>{item.title}</span>
            <span>{`$${item.price}`}</span>
            
            {state.carts.some((p)=>p.id===item.id)?
            <button style={{backgroundColor:'red'}} 
            onClick={()=>dispatch(
                {type:"REMOVE_FROM_CART",
                payload:item.id})
            }>Remove from Cart</button>

            :<button style={{backgroundColor:'green'}} 
            onClick={()=>dispatch(
                {type:"ADD_TO_CART",
                //payload:item,
                payload:{
                id:item.id,
                title:item.title,
                thumbnail:item.thumbnail,
                qty:1,
                price:item.price

            }
            })}> Add to Cart</button>}
            
        </div>
     ))}
    </div>
  )
}

export default Product
