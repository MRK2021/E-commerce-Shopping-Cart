import Product from './Components/Product.js';
import './App.css';
import './Components/MS.css';
import detail from './Components/ProductDetailsMen.js';
import Search from './Components/Search';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Components/Home.js";
import Men from "./Components/Men.js";
import Women from "./Components/Women.js";
import Cart from "./Components/Cart.js";

function App() {
  return (
    <div className="App">
      <head>
      
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>SAE E-commerce</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="./Components/MS.css"/>
        
      </head>
      <body>
        <HashRouter>
        <div class="container">
          <div class="navbar">
            <a href="#"><h2>SAE</h2></a> 
            <nav>
              <div>
                <ul className="header">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/Components/Men.js">Men</NavLink></li>
                  <li><NavLink to="/Components/Women.js">Women</NavLink></li>
                  <li class="fa fa-shopping-cart"><div class="icons"><NavLink to="/Components/Cart.js"></NavLink></div></li>
                </ul>
                <div>
                  <i></i>
                  <i class="fa-heart"></i>
                </div>
              </div>
            </nav>
            <div class="search-container">
                <Search details={detail}/>
            </div>
          </div>
        </div>
        <div className="content">
                <Route exact path="/Components/" component={Home}/>
                <Route path="/Components/Men.js" component={Men}/>
                <Route path="/Components/Women.js" component={Women}/>
        </div>
        </HashRouter>   
      </body>
    </div>
  );
}

export default App;
