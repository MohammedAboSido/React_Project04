import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import logo from "../../assets/logo.png";
import style from "./style.module.css";

export default function Header() {
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo"></img>
          <span>amazon</span>
        </div>
        <div className={style.right}>
          <div>
            <ul className={style.menu}>
              <li>Collections</li>
              <li>Brands</li>
              <li>New</li>
              <li>Sales</li>
              <li>ENG</li>
            </ul>
          </div>
          <input type="text" className={style.search} placeholder="Search" />
          <CgShoppingBag className={style.cart} />
        </div>
      </div>
    </>
  );
}
