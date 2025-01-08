import React, {useContext,useState} from 'react';
import {ShopContext} from '../../Context/ShopContext';
import './Navbar.css';
import logo from '../Assets/Logo.png';
import smile from '../Assets/Smile Icon.png';
import cart_icon from '../Assets/Cart Icon.png';
import { Link } from 'react-router';

const Navbar = () => {
   const [menu,setMenu] = useState("shop");
   const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <div className="logo-text">
          <p>HAPP<strong>Y</strong><span className="nav-smile"><img src={smile} alt="" /></span></p>
          <p className="sub-text">SHOPPERS</p>
        </div>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
export default Navbar