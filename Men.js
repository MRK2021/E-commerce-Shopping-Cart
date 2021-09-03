import React, { Component } from "react";
import Product from './Product.js';
import detail from './ProductDetailsMen.js';

function Men() {
    return (
        <div>
            <div><h2>hi, hello men</h2></div>
            <div class="small-container">
                <a href="#" >
                <div class="filter-icon">
                    <i class="fa-filter"></i>
                    <span>Filter</span>
                </div>
                </a>
                <h3>MEN</h3>
            </div>
            <div>
            {detail.map((e)=>{
                return (
                <Product id={e.id} name={e.name} price={e.price} imgsrc={e.imgsrc} realprice={e.realprice} discount={e.discount} color={e.color}/>
                );})
            }
            </div>
        </div>
    );
};

export default Men;