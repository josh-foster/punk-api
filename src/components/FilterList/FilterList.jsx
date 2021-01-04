import React from "react";
import styles from "./FilterList.module.scss";
import FilterItem from "../FilterItem";

const FilterList = (props) => {
  const {
    activateFilter,
    filterBeers
  } = props;







  return (
    <>
      {/* <h2 className={styles.strength}>beer by strength:</h2> */}
    
      <FilterItem 
      text={"Less than 1%"}
      activateFilter={activateFilter}
      filterBeers={filterBeers}
      filterText={"abv_lt=1"}
      />
      <FilterItem 
      text={"0.5% to 5%"}
      activateFilter={activateFilter}
      filterBeers={filterBeers}
      filterText={"abv_gt=1&abv_lt=5"}
      />
      <FilterItem 
      text={"More than 5%"}
      activateFilter={activateFilter}
      filterBeers={filterBeers}
      filterText={"abv_gt=5"}
      />
    </>
  );
};

export default FilterList;
