import React from "react";
import styles from "./Navbar.module.scss";
import SearchBox from "../SearchBox";
import FilterList from "../FilterList";

const Navbar = (props) => {

  const {grabBeersBySearch, activateSearch, activateFilter, filterBeers} = props
  return (
    <>  
      <section className={styles.title}>
        <h1>brewdog</h1>
      </section>

      <section className={styles.filters}>
        <div className={styles.abvFilter}>
          <FilterList
            activateFilter={activateFilter}
            filterBeers={filterBeers}
          />
        </div>
        <div className={styles.search}>
          <SearchBox
            activateSearch={activateSearch}
            grabBeersBySearch={grabBeersBySearch}
          />
        </div>
      </section>
    </>
  );
};

export default Navbar;


// <h1>brewdog</h1>
// <section>
//   <div className="filter">
//     <FilterList className={styles.FilterList}/>
//   </div>
//   <div className="search">
//     <SearchBox activateSearch={activateSearch} grabBeersBySearch={grabBeersBySearch} /> 
//   </div> 
// </section>