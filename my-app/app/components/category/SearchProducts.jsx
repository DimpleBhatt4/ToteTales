import React, { useState } from "react";

const SearchProducts = ({ products, setFilteredProducts, searchByKey , filterByField}) => {
  const [inputVal, setInputVal] = useState("");
  
  function handleInputChange(e) {
    const searchValue = e.target.value.toLowerCase();
    setInputVal(searchValue);

    // Filter
    const filtered = products.filter(
      (product) =>
        product[filterByField[0]] === filterByField[1] &&
        product[searchByKey].toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  }
  return (
    <input
      type='text'
      placeholder='Search that suits your taste...'
      className='border w-[100%] p-2 rounded-lg'
      value={inputVal}
      onChange={(e) => handleInputChange(e)}
    />
  );
};

export default SearchProducts;
