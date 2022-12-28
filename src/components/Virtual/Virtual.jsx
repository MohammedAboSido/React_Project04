import React from "react";
import ReactCompareImage from "react-compare-image";
import after from "../../assets/after.png";
import before from "../../assets/before.png";
import shade from "../../assets/shade.png";
import style from "./style.module.css";

export default function Virtual() {
  return (
    <>
      <div className={style.virtual}>
        <div className={style.left}>
          <span>VIRTUAL TRY-ON</span>
          <span>NEVER BUY THE WRONG SHADE AGAIN!</span>
          <span>Try Now!</span>
          <img src={shade} alt="shade" />
        </div>
        <div className={style.right}>
          <div className={style.wrapper}>
            <ReactCompareImage leftImage={before} rightImage={after} />
          </div>
        </div>
      </div>
    </>
  );
}
