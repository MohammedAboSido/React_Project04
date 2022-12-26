import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import heroImg from "../../assets/hero.png";
import style from "./style.module.css";

export default function Hero() {
  return (
    <>
      <div className={style.container}>
        {/* left side */}
        <div className={style.hSides}>
          <span className={style.text1}>SKIN PROTECTION CREAM</span>
          <div className={style.text2}>
            <span>Trendy Collection</span>
            <span>
              Seedily say has suitable disposal and boy. Exercise joy man
              children rejoiced.
            </span>
          </div>
        </div>

        {/* Middle Side hero */}
        <div className={style.wrapper}>
          <div className={style.blueCircle}></div>
          <img src={heroImg} alt="hero img" width={600} />
          <div className={style.cart2}>
            <RiShoppingBagFill />
            <div className={style.signup}>
              <span>Best Signup Offers</span>
              <BsArrowRight />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className={style.hSides}>
          <div className={style.traffic}>
            <span>1.5m</span>
            <span>Monthly traffic</span>
          </div>
          <div className={style.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
          </div>
        </div>
      </div>
    </>
  );
}
