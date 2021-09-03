import React from 'react';
import { useState, useEffect } from 'react';
import './MS.css';
var num=0;

const Product = (props) => {
    var [cart_num, setCart_num] = useState(0);
    var [wish_num, setWish_num] = useState(0);
    var [total, setTotal] = useState(0);
    var [AddButton, setAddButton] = useState(true);
    var [AddWishlist, setAddWishlist] = useState(true);
    var [MinButton, setMinButton] = useState(false);
    var [MaxButton, setMaxButton] = useState(false);
    var [Showx, setShowx] = useState(false);
    useEffect(() => {
            if(cart_num >= 1){
            setAddButton(false);
            setAddWishlist(false);
            setMinButton(true);
            setMaxButton(true);
            setShowx(true);
            } 
            if(cart_num == 0){
            setAddButton(true);
            setAddWishlist(true);
            setMinButton(false);
            setMaxButton(false);
            setShowx(false);
            }
    });
    const AddToCart = () => { setCart_num(cart_num = cart_num+1); }
    const MinusButton = () => {
        if(cart_num === 1 ) {
            setCart_num(0);
        } else if(cart_num === 0) {
        } else {
            setCart_num(cart_num = cart_num - 1);
        }  
    }
    const PlusButton = () => {
        setCart_num(cart_num = cart_num + 1);
    }

    function product_total() { return cart_num * props.price;};
    const AddToWishlist = () => { setWish_num(wish_num = wish_num+1); }
    num = cart_num;



  return (
    
        <div class="discription" style={{border:'2px solid black', borderRadius:'7', padding:'30px 30px', margin:'30px'}}>
          <img src={props.imgsrc} alt={props.imgalt} class="props-image"/>
          <div class="discription">
            <h4>{props.name}t</h4>
            <i class="fa fa-heart"></i>
          </div>
          <p>Rs. {props.price} <s style={{color: "#767676"}}>Rs. {props.realprice}</s> <span style={{color: "red"}}> ({props.discount}% off)</span> </p>
          {AddButton && <button id="AddButton" onClick={AddToCart}>Add to my Cart</button>}
          <h4>{MinButton && <button onClick={MinusButton} style={{display:'inline-block', margin:'10px'}}> - </button>}{Showx && <h4 style={{display:'inline-block'}}>{cart_num}</h4>}{MaxButton && <button onClick={PlusButton} style={{display:'inline-block', margin:'10px'}}> + </button>}</h4>
          <br/>{AddWishlist && <button id="AddWishlist" onClick={AddToWishlist}>Add to Wishlist</button>}<br/>
          <a href='./Cart.js'>Go to Cart</a>
        </div>
        
        


        

     );
}
export { Product as default};
export {num};