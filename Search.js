import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchProduct from './SearchProduct';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");

  const filteredProducts = details.filter(
    product => {
      return (
        product
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        product
        .color
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchProduct() {
    return (
      <Scroll>
        <SearchProduct filteredProducts={filteredProducts} />
      </Scroll>
    );
  }

  return (
    <section className="">
      <div className="">
        <h2 className=""></h2>
      </div>
      <div className="">
        <input 
          className=""
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {searchProduct()}
    </section>
  );
}

export default Search;