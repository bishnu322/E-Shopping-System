import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import cartImg from './Assets/shopping-bag.png'

const style = {
  width : "40px",
  zIndex: '1',
  position: 'absolute',
  right: '90px',
  top: '10px',
}
const span = {
  display:"inline-block",
  position:"absolute",
  top:"23px",
  zIndex: "2",
  width :"20px",
  height:"20px",
  // background: "#fff",
  borderRadius : "50%",
  textAlign:"center"
}
function Navbar() {

  const items = useSelector((state) => state.cart);
  return (
    <div className='navbar'>
        <span className='logo'>E-Shopping</span>
        <div>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/SignIn'>Sign In</Link>
          <Link className='navLink' to='/cart'><img src={cartImg} style={style} alt="CartImg"/><span style={span}>{items.length}</span></Link>
        </div>
    </div>
  )
}

export default Navbar