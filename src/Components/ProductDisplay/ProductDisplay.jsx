import React, { useContext, useEffect, useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/Rating Star Icon.png";
import star_dull_icon from "../Assets/Dull Star Icon.png";
import { ShopContext } from '../../Context/ShopContext';
import Spinner from '../Spinner/Spinner';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [isZoomed, setIsZoomed] = useState(false);
    const toggleZoom = () => {
      setIsZoomed(!isZoomed);
    }
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);     
      }, 2000);
    }, []);
    if(loading) {
      return <Spinner />;
    }
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className={`productdisplay-main-img ${isZoomed ? "zoom" : ""}`}
                        src={product.image}
                        alt=""
                        onClick={toggleZoom} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            INR {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            INR {product.new_price}
          </div>
          <div className="productdisplay-right-description">
            A lightweight, pink colored dress, close-fitting and with a square neckline and a full-sleeves, suitable for wearing in summers.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category : </span>Women, Short-dress</p>
          <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
        </div>
      </div>
    </div>
  )
};

export default ProductDisplay;