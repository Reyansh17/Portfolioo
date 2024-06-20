'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import data from '../../../data/portfolios/works1';

function Portfolio() {
  const swiperOptions = {
    modules: [Navigation],
    speed: 600,
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
        spaceBetween: 50,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 100,
        centeredSlides: true,
      },
    },
  };
  return (
    <section
      className="portfolio-carsouel section-padding"
      data-scroll-index="3"
    >
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">My Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2>
              My <span className="fw-200">Projects</span>
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
        <div className="work-swiper-center">
          <Swiper
            id="content-carousel-container-unq-work"
            className="swiper-container"
            data-swiper="container"
            {...swiperOptions}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="item">
                  <div className="img object-fit ">
                    <img src={item.img} alt="" className='h-100' />
                  </div>
                  <div className="cont d-flex align-items-center mt-30 pb-15 bord-thin-bottom">
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.subTitle}</p>
                    </div>
                    <div className="ml-auto">
                      <a href='https://electionspatiala.com/electionspatiala.com' className="rmore">
                        <img
                          src="/dark/assets/imgs/arrow-right.png"
                          alt=""
                          className="icon-img-20"
                        />
                      </a>
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

export default Portfolio;
