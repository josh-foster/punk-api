import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {

  const {grabBeersBySearch, activateSearch} = props

  const handleChange = (e) => {
    activateSearch(e.target.value);
    grabBeersBySearch(e.target.value);
  }

  const handleBlur = (e) => {
    e.target.value = ``
    activateSearch(``);
    grabBeersBySearch(``);
  }
  return (
      
      <input 
      onBlur={handleBlur}
      onChange={handleChange}
      type="text"
      placeholder="Search Beers..." />
    
  );
};

export default SearchBox;
