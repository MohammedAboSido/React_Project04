import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hero from "../../assets/testimonialHero.png";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";
import { TestimonialsData } from "./Data";
import style from "./style.module.css";
export default function Testimonials() {
  return (
    <>
      <div className={style.testimonials}>
        <div className={style.wrapper}>
          <div className={style.container}>
            <span>TOP RATED</span>
            <span>
              SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN
              CHILDREN REJOICED.
            </span>
          </div>
          <img src={hero} alt="hero" />
          <div className={style.container}>
            <span>100K</span>
            <span>HAPPY CUSTOMERS WITH US</span>
          </div>
        </div>
        <div className={style.review}>Review</div>
        <div className={style.carousel}>
          <Swiper
            className={style.tCarousel}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            breakpoints={{
              856: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {TestimonialsData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <TestimonialsCard
                    name={item.name}
                    comment={item.comment}
                    img={item.image}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
