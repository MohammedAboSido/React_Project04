import { useAutoAnimate } from "@formkit/auto-animate/react";
import React, { useState } from "react";
import plane from "../../assets/plane.png";
import Card from "../Card/Card";
import { ProductsData } from "./Data";
import style from "./style.module.css";

export default function Products() {
  const [menuProducts, setMenuProducts] = useState(ProductsData);
  const [parent] = useAutoAnimate();
  const filterHandler = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <>
      <div className={style.container}>
        <img src={plane} alt="plane" />
        <h1>Our Feature Products</h1>
        <div className={style.products}>
          <ul className={style.menu}>
            <li onClick={() => setMenuProducts(ProductsData)}>All</li>
            <li onClick={() => filterHandler("skin care")}>Skin Care</li>
            <li onClick={() => filterHandler("conditioner")}>Conditioner</li>
            <li onClick={() => filterHandler("foundation")}>Foundation</li>
          </ul>
          <div className={style.list} ref={parent}>
            {menuProducts.map((item) => {
              return (
                <Card
                  name={item.name}
                  detail={item.detail}
                  img={item.img}
                  price={item.price}
                  key={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
