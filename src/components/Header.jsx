import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';
function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart= useSelector((state)=>state.cartReducer)
  return (
    <div>
    <Navbar expand="lg" style={{backgroundColor:''}}className="navbar-expand-lg " /* style={{zIndex:'1',position:'fixed',width:'1600px'}} */>
 <Container>
   <Navbar.Brand  href="#home"><h3 style={{color:"white",alignItems:'center',display:'flex',overflowY:"hidden"}}>Shopify</h3></Navbar.Brand>
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
   <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="me-auto">
      <div className='d-flex justify-content-center align-items-center'>
      <Link style={{textDecoration:'none',color:'white',marginLeft:"50px",letterSpacing:'2px'}}  to={'./'}>HOME</Link>
     <Link  style={{textDecoration:'none',color:'white',marginLeft:"720px",letterSpacing:'2px'}} to={'./wishlist'}>  WISHLIST<Badge bg="dark">{wishlist.length}</Badge></Link>

<Link style={{textDecoration:'none',color:'white',marginLeft:"50px",letterSpacing:'2px'}}  to={'./cart'}><i class="fa-solid fa-beat fa-cart-shopping"></i> MY CART:{cart.length} item(s)</Link>
      </div>
     
    
      
     </Nav>
   </Navbar.Collapse>
 </Container>
</Navbar>


</div>
  )
}

export default Header