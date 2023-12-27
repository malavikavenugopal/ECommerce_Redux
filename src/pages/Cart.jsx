import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
   //to get the array from home
   const [subTotal,setSubTotal] = useState(0)
   const cartArray = useSelector((state) => state.cartReducer)
 //to get total sum

  const getTotal = () =>{
    if(cartArray.length>0){
      setSubTotal(cartArray?.map((item)=>(item.price)).reduce((p1,p2)=>p1+p2))
    }
    else{
      setSubTotal(0)
    }
   
  }
const navigate = useNavigate()
 console.log(subTotal)
//to delete item from array
const dispatch = useDispatch()
const handlecheckout =()=>{
  
 
alert('Thank You,Order Successfully Completed')
  navigate('/')
  dispatch(emptyCart())

}

useEffect(()=>{
 getTotal()
},[cartArray])
  return (

    <div>
{
   
      cartArray?.length>0?


      <div className="row" style={{marginTop:'30px'}}>
      <div className="col-1"></div>
      <div className="col-10">
      <Table striped bordered hover style={{textAlign:'center'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {cartArray.map((item,index)=>(
           <tr>
           <td>{index+1}</td>
           <td>{item.title}</td>
           <td><img height='100px' src={item.image}/></td>
           <td>₹{item.price}</td>
           <td><button className='btn' style={{color:'red'}} onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></button>
 </td>
        
 
 
 
 
       
         
         </tr>
         ))}
         
        </tbody>
      </Table>
      <br></br>
      <br></br>
     <div className="row">

      <div className="col-lg-5 ">
      <h4 style={{color:" rgb(159, 55, 78)",fontWeight:'700',overflowY:'hidden'}}>Cart Totals</h4>
<h5 style={{overflowY:'hidden'}}>Total No of Products : {cartArray.length}</h5>
<br></br>
<h3  style={{overflowY:'hidden'}}>Subtotal  <span className='subtotal' style={{marginLeft:'250px',overflowY:'hidden'}}> ${subTotal}</span></h3>
<hr style={{width:'450px'}}></hr>
<h3 style={{overflowY:'hidden'}}>Shipping Fee <span className='shippingcharge' style={{marginLeft:'195px'}}>$5</span></h3>
<hr style={{width:'450px'}}></hr>
<h3 style={{color:" rgb(159, 55, 78)",fontWeight:'700',overflowY:"hidden"}}>Total   <span style={{marginLeft:'294px',color:'black'}}>$ {subTotal+5}</span></h3>
<button className='btn btn-success w-100' onClick={handlecheckout}>Proceed to Checkout</button>
      </div>
    <div className="col-3"></div>
      <div className="col-2">
      
      </div>
     </div>
      </div>
      
    </div>
      :<div className='d-flex justify-content-center align-items-center flex-column' style={{marginTop:'230px'}}>
      <img height='150' src= 'https://cdn.iconscout.com/icon/premium/png-512-thumb/empty-cart-2685174-2232751.png'/>
      <h1 style={{ color:'rgb(159, 55, 78)',overflowY:'hidden'}}> Your Cart is Empty</h1>
      </div>
}
  

    </div>  )
}

export default Cart