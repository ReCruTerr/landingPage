import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";
import { Navigation } from "swiper/modules";
export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="SliderHeader">
            <div className="firstSliderContainer">
              <div className="firstSliderContainer__item--1">
                <div>
                  <img src="/people.svg" alt="" className="people" />
                </div>
                <div className="firstSliderContainer__item--1__second">
                  <ul className="firstSliderContainer__item--1__second--firstChild">
                    <li></li>
                    <li>home won with</li>
                    <li></li>
                  </ul>
                  <hr />
                  <div className="firstSliderContainer__item--1__second--secondChild">
                    <img src="/protection.svg" alt="" />
                  </div>
                  <hr />
                  <div className="firstSliderContainer__item--1__second--lastChild">
                    <p>The buyer</p>
                    <span>
                      won her dream house in multiple-offers situation.
                    </span>
                    <p>The seller</p>
                    <span>got a guaranteed closing with no contingencies.</span>
                  </div>
                </div>
              </div>
              <div className="firstSliderContainer__item--2">
                <h2>Turn an offer to all cash</h2>
                <p>
                  Once your buyer is preapproved, upgrade your buying power to
                  cash to make your strongest offer, first.
                </p>
                <div className="LearnLink">
                  <a href="" className="LearnLink__item">
                    Learn more
                  </a>
                </div>
                <hr />
                <div className="Docs">
                  <img src="/book.svg" alt="" className="book" />
                  <a href="">Read the success story</a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="secondSliderHeader">
            <div className="secondSliderContainer"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="thirdSliderHeader">
            <div className="thirdSliderContainer"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
