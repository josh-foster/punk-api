import React from "react";
import styles from "./FilterItem.module.scss";

const FilterItem = (props) => {

  const { text,
          activateFilter,
          filterBeers,
          filterText} = props

  const handleFocus = () => {
    activateFilter(filterText);
    filterBeers(filterText);
  }


  const handleBlur = () => {
    activateFilter("page=2&per_page=80");
    filterBeers("page=2&per_page=80");
  }
  
  return (
    <button 
    onFocus={handleFocus} 
    onBlur={handleBlur}
     >
      {text}
    </button>
  );
};

export default FilterItem;
