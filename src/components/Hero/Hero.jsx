import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiShoppingBagFill } from "react-icons/ri";
import heroImg from "../../assets/hero.png";
import style from "./style.module.css";

export default function Hero() {
  const transition = { duration: 3, type: "spring" };
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
          {/* blue circle and animation */}
          <motion.div
            initial={{ bottom: "2rem" }}
            whileInView={{ bottom: "0rem" }}
            transition={transition}
            className={style.blueCircle}
          ></motion.div>
          {/* Hero Image and animation*/}
          <motion.img
            initial={{ bottom: "-2rem" }}
            whileInView={{ bottom: "0rem" }}
            transition={transition}
            src={heroImg}
            alt="hero img"
            width={600}
          />
          {/* Cart and animation */}
          <motion.div
            initial={{ right: "4%" }}
            whileInView={{ right: "2%" }}
            transition={transition}
            className={style.cart2}
          >
            <RiShoppingBagFill />
            <div className={style.signup}>
              <span>Best Signup Offers</span>
              <BsArrowRight />
            </div>
          </motion.div>
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
