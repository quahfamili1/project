import React, { useContext, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";
import FilterContext from "../context/FilterContext";

const Header = () => {
  const context = useContext(FilterContext);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className={
        clicked
          ? `${styles.nav} ${styles.responsive}`
          : `${styles.nav} ${styles.desktop__nav}`
      }
    >
      <img className={styles.icon} src={icon}></img>
      <ul>
        <Link to="/" className={styles.list}>
          <li>Home</li>
        </Link>
        {context.isFiltered && (
          <Link to="/Result" className={styles.list}>
            <li>Result</li>
          </Link>
        )}
        {context.isSelected && (
          <Link to="/Trend" className={styles.list}>
            <li>Trends</li>
          </Link>
        )}
        <Link to="/Aboutus" className={styles.list}>
          <li>About us</li>
        </Link>
        <a className={styles.icon} onClick={() => setClicked(!clicked)}>
          <i className="fa fa-bars"></i>
        </a>
      </ul>
    </div>
  );
};

export default Header;
