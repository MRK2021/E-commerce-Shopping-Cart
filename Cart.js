import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import * as Product from './Product.js';
import { num } from './Product.js';

function Cart (props) {
    return (
    
         <div >
             <h2>hello, see your cart here !</h2>
             <h4>{num}</h4>
             <a href='./App.js'><h3>Go to Home</h3></a>
         </div> 
        

     );
}

export default Cart;
