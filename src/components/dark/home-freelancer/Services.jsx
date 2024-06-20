import React from 'react';

function Services() {
  return (
    <section className="services section-padding pb-0" data-scroll-index="1">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">My Specialization</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2>
              What I <span className="fw-200">Offer</span>
            </h2>
            <div className="ml-auto">
              <a href="/services" className="go-more">
                <span className="text">View all services</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-paint-bucket main-color fz-50 mb-40"></div>
              <h5 className="mb-15">UI / UX Design</h5>
              <p>
                Live workshop where we define the main problems and challenges
                before building a strategic plan moving forward.
              </p>
              <a href="/dark/page-services-details" className="rmore mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/dark/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-box radius-15 md-mb30">
              <div className="ti-layout-slider main-color fz-50 mb-40"></div>
              <h5 className="mb-15">Web Development</h5>
              <p>
                Live workshop where we define the main problems and challenges
                before building a strategic plan moving forward.
              </p>
              <a href="/dark/page-services-details" className="rmore mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/dark/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item-box radius-15">
              <div className="ti-rocket main-color fz-50 mb-40"></div>
              <h5 className="mb-15">Digital Marketing</h5>
              <p>
                Live workshop where we define the main problems and challenges
                before building a strategic plan moving forward.
              </p>
              <a href="/dark/page-services-details" className="rmore mt-30">
                <span className="sub-title">Read More</span>
                <img
                  src="/dark/assets/imgs/arrow-right.png"
                  alt=""
                  className="icon-img-20 ml-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
