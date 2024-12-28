
import { useEffect, useReducer, useState } from 'react'
import './App.css'
import cartReducers from './reducers/cartReducers'
import Product from './components/Product'
import Cart from './components/Cart'

function App() {

  const url='https://dummyjson.com/products'
  //const [products,setProducts]=useState([])
  const [state,dispatch]=useReducer(cartReducers,{prod:[],carts:[]})
  const fetchProducts=async()=>{
    try{
      let res=await fetch(url)
      let data=await res.json()
      dispatch({
        type:"ADD_PRODUCTS",
        payload:data.products,
      })
      //setProducts(data.products)
    }catch(err){
      console.log(err)
    }

  }
  useEffect(()=>{fetchProducts()},[])
  
  console.log(state.prod)
  console.log(state.carts)
  

  return (
    <div 
    style={{display:'flex',
    height:'100vh',
    width:'100vw',
    }}>
      
      <Product state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
