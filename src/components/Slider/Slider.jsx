import React from "react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import { SliderProducts } from "./Data";
import "./mainStye.css";
import style from "./style.module.css";
export default function Slider() {
  return (
    <>
      <div className={style.sContainer}>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            440: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className={style.mySwiper}
          modules={[Navigation]}
          loopFillGroupWithBlank={true}
          spaceBetween={40}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          navigation
          pagination={{ clickable: false }}
        >
          {SliderProducts.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card
                  name={item.name}
                  img={item.img}
                  detail={item.detail}
                  price={item.price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
