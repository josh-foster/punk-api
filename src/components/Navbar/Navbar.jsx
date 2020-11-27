import React from "react";
import styles from "./Navbar.module.scss";
import SearchBox from "../SearchBox";
import FilterList from "../FilterList";

const Navbar = () => {
  return (
    <>
      <p className="ptag">Navbar works</p>
      <SearchBox className={styles.searchBox}/>
      <FilterList/>
    </>
  );
};

export default Navbar;
