import React from 'react';
import Card from './Card.js';

function SearchProduct( {filteredProducts} ) {
  const filtered = filteredProducts.map(product =>  <Card key={product.id} color={product.color} name={product.name} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchProduct;