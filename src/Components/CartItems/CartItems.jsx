import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';
import remove_icon from '../Assets/Cross Icon.png';

const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-header">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
         if(cartItems[e.id]>0) {
           return <div>
           <div className="cartitems-row">
             <img src={e.image} alt="" className='carticon-product-icon' />
             <p className="cartitems-title">{e.name}</p>
             <p className="cartitems-price">INR {e.new_price}</p>
             <button className='cartitems-quantity'>{cartItems[e.id]}</button>
             <p className="cartitems-total">INR {e.new_price*cartItems[e.id]}</p>
             <img className='cartitems-remove-icon' src={remove_icon} onClick={() =>{removeFromCart(e.id)}} alt="" />
           </div>
           <hr />
         </div>
         }
         return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>INR {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>INR {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If You Have A Promo Code, Enter It Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems;