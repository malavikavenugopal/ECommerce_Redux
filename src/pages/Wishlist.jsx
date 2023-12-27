import React from 'react'
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
function Wishlist() {

  //to get the array from home
  const wishlistArray = useSelector((state) => state.wishlistReducer)

  
//to delete item from array
  const dispatch = useDispatch()
console.log(wishlistArray);


const  handleWishlist=(item)=>{
  dispatch(addToCart(item))
  dispatch(removeFromWishlist(item.id))
}

  return (
    <div >
<Container style={{marginTop:"20px"}}>

      <div className="row" style={{marginTop:"50px"}}>
  
{
  wishlistArray?.length>0?
  wishlistArray.map((item)=>(

<Col lg={3} className='d-flex justify-content-center '>
    
    <div style={{ width: '18rem',margin:'10px',height:'500px',overflowY:"hidden" }}>
      <Card.Img variant="top" src={item.image} style={{height:'300px'}}/>
      <br></br>
      <br></br>
      <Card.Body style={{overflowY:"hidden"}}>
        
       {/*  <Card.Text>
       {item.description.slice(0,40)}...
        </Card.Text> */}
     
          {/* after add to cart remove that item */}
          <div className='d-flex'>
      <b style={{textAlign:'center',fontSize:'20px'}}>${item.price}</b>
      
<button style={{marginLeft:"170px",color:'red'}} className='btn'onClick={()=>dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></button> 
</div>
        <Card.Title style={{overflowY:'hidden',fontSize:'17px'}}>{item.title.slice(0,20)}...</Card.Title>
          <Button style={{backgroundColor:'navy'}} className='w-100' onClick={()=>handleWishlist(item)}> <i class="fa-solid fa-cart-shopping"></i>ADD TO CART</Button>
   


{/* <Button style={{marginLeft:"90px"}}variant="danger" onClick={()=>dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash"></i></Button>
 */}       
       
      </Card.Body>
    </div>
    
    </Col>
  )):<div className='d-flex justify-content-center align-items-center flex-column' style={{marginTop:'170px'}}>
  <img height='150' src= 'https://cdn.iconscout.com/icon/premium/png-512-thumb/empty-cart-2685174-2232751.png'/>
  <h1 style={{ color:'rgb(159, 55, 78)',overflowY:'hidden'}}> Your WishList is Empty</h1>
  </div>
}
               
  
      </div>
      
</Container>
    </div>
  )
}

export default Wishlist