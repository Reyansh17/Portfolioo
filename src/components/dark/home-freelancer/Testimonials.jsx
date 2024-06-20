'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import data from '../../../data/testimonials.json';

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
      prevEl: '.swiper-arrow-control .swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      768: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
  };
  return (
    <section className="testim-crev" data-scroll-index="4">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Testimonails</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2>
              What people <span className="fw-200">say?</span>
            </h2>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper2 testim2"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
            {...swiperOptions}
          >
            {data.slice(0, 3).map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item bord-box radius-15">
                  <div className="content">
                    <div className="text">
                      <span className="tag sub-title mb-30 main-color">
                        Design Quality
                      </span>
                      <p>{item.desc}</p>
                    </div>
                    <div className="info mt-40">
                      <div className="img-curv">
                        <div className="img">
                          <img src={item.img} alt="" />
                        </div>
                      </div>
                      <div className="ml-20">
                        <h6>{item.name}</h6>
                        <span className="sub-title opacity-7">
                          {item.subName}
                        </span>
                      </div>
                      <div className="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="256.721"
                          height="208.227"
                          viewBox="0 0 256.721 208.227"
                          className="qout-svg"
                        >
                          <path
                            data-name="Path"
                            d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                            transform="translate(121.55 640.568)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="1"
                            opacity="0.322"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
