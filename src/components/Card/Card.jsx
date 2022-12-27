import React from "react";
import style from "./style.module.css";
export default function Card({ name, detail, price, img }) {
  return (
    <>
      <div className={style.mainCard}>
        <div className={style.leftS}>
          <div className={style.name}>
            <span>{name}</span>
            <span>{detail}</span>
          </div>
          <span>{price}$</span>
          <div>Shop now</div>
        </div>
        <img src={img} alt="Product" className={style.imgP} />
      </div>
    </>
  );
}
