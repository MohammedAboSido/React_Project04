import React, { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import logo from "../../assets/logo.png";
import style from "./style.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo"></img>
          <span>amazon</span>
        </div>
        <div className={style.right}>
          <div className={style.bars} onClick={toggleMenuHandler}>
            <GoThreeBars />
          </div>
          <ul
            className={style.menu}
            style={{ display: showMenu ? "inherit" : "none" }}
          >
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
          <input type="text" className={style.search} placeholder="Search" />
          <CgShoppingBag className={style.cart} />
        </div>
      </div>
    </>
  );
}
