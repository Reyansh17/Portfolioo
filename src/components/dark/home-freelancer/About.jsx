import React from 'react';

function About() {
  return (
    <section
      className="about-crev section-padding position-re"
      data-scroll-index="2"
    >
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-6">
            <div className="left-block mt-100 md-mb50">
              <div className="d-flex align-items-center">
                <div>
                  <div className="info">
                    <h3 className=" main-color fz-50 line-height-1">4</h3>
                    <p className="nowrap">
                      Years of
                      <br /> Experience
                    </p>
                  </div>
                </div>
                <div>
                  <div className="img fit-img radius-30">
                    <img
                      src="/dark/assets/imgs/intro/unproff3.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mz-shap">
                <svg
                  height="100%"
                  viewBox="0 0 610 547"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z"
                    fill="#222"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content full-width">
              <div className="sec-head mb-30">
                <h6 className="sub-title mb-15 main-color">About Me</h6>
                <h2>
                  Lead Web-Developer <br /> and Designer.
                </h2>
                <div className="text mt-15">
                  <p>
                  Hello! I'm Reyansh Gahlot, a passionate tech enthusiast and dedicated sportsman. From a young age, I have been captivated by the ever-evolving world of technology and its potential to transform our lives.
                  </p>
                </div>
              </div>
              <div className="info-author mt-40 pt-40 bord-thin-top">
                <div className="row">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-20">
                      <div>
                        <h6 className="nowrap fz-16">Name :</h6>
                      </div>
                      <div className="ml-20">
                        <p className="fz-14">Reyansh Gahlot</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <h6 className="nowrap fz-16">Address :</h6>
                      </div>
                      <div className="ml-20">
                        <p className="fz-14">Bikaner,Rajasthan</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-20">
                      <div>
                        <h6 className="nowrap fz-16">Phone :</h6>
                      </div>
                      <div className="ml-20">
                        <p className="fz-14">+91 8112239954</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <h6 className="nowrap fz-16">Email :</h6>
                      </div>
                      <div className="ml-20">
                        <p className="fz-14">rgahlot_be22@thapar.edu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="/cv.pdf"
                className="butn butn-md main-colorbg radius-30 mt-40"
              >
                <span className="text-dark">Dwonload CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="line-overlay opacity-7">
        <svg
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: 3246.53 }}
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default About;
