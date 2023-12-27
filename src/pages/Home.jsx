import React from 'react'
import {useDispatch} from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';
function Home() {
  //to add items to wishlist
  const dispatch = useDispatch()
  //calling the useFetch hook
  const data = useFetch('https://fakestoreapi.com/products')
  return (
    <div>
<div style={{marginTop:'50px'}}>
<Container style={{position:'relative'}}>
  <h4 style={{overflowY:"hidden"}}>Top Sellers</h4>
  
    <img height='400px' className='w-100' src='https://img.freepik.com/free-photo/two-excited-friends-having-great-time-together_273443-1493.jpg?w=1380&t=st=1700475816~exp=1700476416~hmac=a9ce9f1ab9a496f8f875d59fdd9b86d9b5c591fef6b74b6b88737fef66cddbac'/>
    <div style={{position:'absolute',marginTop:'-300px',marginLeft:'50px',color:'white'}}>
   {/*    <h3 style={{fontSize:'40px',overflowY:'hidden'}}>Flat</h3>
      <h1  style={{fontSize:'60px',overflowY:'hidden',fontWeight:'900'}}><span style={{color:' rgb(159, 55, 78)',fontWeight:'900'}}>$40
        </span> OFF</h1>
      <h5  style={{fontSize:'20px',overflowY:'hidden'}}>On Purchase Of Above $100</h5>
      <h5  style={{fontSize:'20px',overflowY:'hidden'}}>CODE:<span style={{color:' rgb(159, 55, 78)',fontWeight:'900'}}>SHOPIFY40
        </span> </h5> */}
           <h1 style={{fontSize:'40px',overflowY:'hidden'}}><i>SPECIAL OFFER</i></h1>
        <h1 style={{fontSize:'60px',fontWeight:'900',overflowY:'hidden'}}><i><span style={{color:" rgb(159, 55, 78)"}}>FASHION </span>SALE</i></h1>
        <h5  style={{fontSize:'25px',overflowY:'hidden',fontWeight:'900'}}>50% OFF</h5>

    </div>
    </Container>
  </div>
<Container style={{marginTop:'20px'}}>
    <Row style={{marginTop:"50px"}}>

     {
        data?.length>0?
        data?.map((item)=>(

<Col lg={3} className='d-flex justify-content-center '>
    
    <div style={{ width: '18rem',margin:'10px',height:'500px',overflowY:"hidden"}} className='border-outline-dark'>
      <Card.Img variant="top" src={item.image} style={{height:'300px'}}/>
      <Card.Body style={{overflowY:"hidden"}}>
        <br></br>
        
        <div className='d-flex'>
      <b style={{textAlign:'center',fontSize:'20px'}}>${item.price}</b>
      
<button style={{marginLeft:"170px",color:'red'}} className='btn' onClick={()=>dispatch(addToWishlist(item))}><i class="fa-regular fa-heart"></i></button> 
</div>
        <Card.Title style={{overflowY:'hidden',fontSize:'17px'}}>{item.title.slice(0,20)}...</Card.Title>
      {/*   <Card.Text>
       {item.description.slice(0,40)}...
        </Card.Text> */}
    
        <Button style={{backgroundColor:'navy'}} className='w-100' onClick={()=>dispatch(addToCart(item))}> <i class="fa-solid fa-cart-shopping"></i>ADD TO CART</Button>

         

     
       
      </Card.Body>
    </div>
    
    </Col>

         )):<p>Nothing to Display</p>
      } 
    </Row>
    </Container>
  

    </div>
  )
}

export default Home