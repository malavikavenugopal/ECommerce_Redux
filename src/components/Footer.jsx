import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
       <div className=' footer' style={{marginTop:'100px',padding:'50px'}}>
    <div className="row">
        <div className="col-lg-3"> <h4 style={{overflowY:"hidden",color:'black',fontWeight:'700',letterSpacing:'2px'}}><i class="fa-solid fa-cart-shopping"></i>{'  '}E-CART</h4> 
  <p
   style={{overflowY:"hidden",fontSize:"15px",color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto dicta, ea minima accusantium magnam placeat sequi, quasi saepe rerum explicabo dolore hic distinctio pariatur quia fugiat nostrum at temporibus sed!</p></div>
     
        <div className="col-lg-3 d-flex flex-column">
        <h4 style={{overflowY:"hidden",color:'black',fontWeight:'700',letterSpacing:'2px'}}>LINKS</h4>
    
    <Link style={{textDecoration:'none',color:'white',fontSize:"18px"}}  to={'./'}>Home</Link>
    <Link style={{textDecoration:'none',color:'white',fontSize:"18px"}}  to={'./cart'}>Cart</Link>
    <Link  style={{textDecoration:'none',color:'white',fontSize:"18px"}} to={'./wishlist'}>Wishlist</Link>
    <br></br>
    </div>
    <div className="col-lg-3">
       
    <h4 style={{overflowY:"hidden",color:'black',fontWeight:'700',letterSpacing:'2px'}}>GUIDES</h4>
   
   <div className='d-flex flex-column' >
   <Link  style={{textDecoration:'none',color:'white',fontSize:"18px"}} to={'https://react.dev/'}>React</Link>
   <Link  style={{textDecoration:'none',color:'white',fontSize:"18px"}} to={'https://react-bootstrap.github.io/'}>React Bootstrap</Link>
   <Link  style={{textDecoration:'none',color:'white',fontSize:"18px"}} to={'https://bootswatch.com/'}>Bootswatch</Link>
   <br></br>
   </div>
        </div>
        <div className="col-lg-3">
        <h4 style={{overflowY:"hidden",color:'black',fontWeight:'700',letterSpacing:'2px'}}>CONTACT US</h4>
    <div className='d-flex '>
      <input className='form-control' placeholder='Enter your email id'/>
     <button type="button" class="btn btn-success" fdprocessedid="ee2lpg">Submit</button>
      </div>
      <div className='d-flex' style={{marginTop:'40px'}}>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'20px'}} to={''}><i class="fa-brands fa-2x fa-instagram"></i></Link>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'50px'}} to={''}><i class="fa-brands fa-2x fa-facebook"></i></Link>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'50px'}} to={''}><i class="fa-brands fa-2x fa-linkedin"></i></Link>
      <Link  style={{textDecoration:'none',color:'white',marginLeft:'50px'}} to={''}><i class="fa-brands fa-2x fa-whatsapp"></i></Link>
      </div>
        </div>
    </div>
  
    </div>
   
    </>
  )
}

export default Footer