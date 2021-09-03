import React , { useState } from 'react';

function Card(product) {
//   var [SearchButton, setSearchButton] = useState(false);  


  return(
    <div className="card">
      {/* <img className="br-100 h3 w3 dib" alt={product.name} src={product.imgsrc} /> */}
      <div>
       <h4>{product.name}</h4>    
      </div>
    </div>
  );
}

export default Card;