import React from 'react';

function Blog() {
  return (
    <section className="blog-crev section-padding" data-scroll-index="5">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">My BLogs</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600">
              Read My <span className="fw-200">Articles</span>
            </h2>
            <div className="ml-auto">
              <a href="/dark/blog-list" className="go-more">
                <span className="text">View all Articles</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb50">
              <div className="img">
                <img src="/dark/assets/imgs/blog/ar1.webp" alt=""  className=' h-100%'/>
                <div className="tag sub-bg">
                  <span>RG</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="https://medium.com/@gahlotreyansh17/the-flight-of-regrets-95d6807437b9">Jun 19 , 2023</a>
                </div>
                <h5>
                  <a href="https://medium.com/@gahlotreyansh17/the-flight-of-regrets-95d6807437b9">
                    The Flight of Regrets
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb50">
              <div className="img">
                <img src="/dark/assets/imgs/blog/ar2.png" alt="" />
                <div className="tag sub-bg">
                  <span>RG</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="#">Jun 5,2024</a>
                </div>
                <h5>
                  <a href="https://medium.com/@gahlotreyansh17/winner-effect-3fe04a81c709">
                    Winner Effect
                  </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="img">
                <img src="/dark/assets/imgs/blog/ar3.png" alt="" />
                <div className="tag sub-bg">
                  <span>RG</span>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-left-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1d1d1d"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cont">
                <div className="date sub-title mb-10 opacity-7">
                  <a href="https://medium.com/@gahlotreyansh17/grades-dont-define-you-mindset-does-ce71c2a42440">Jun 6,2024</a>
                </div>
                <h5>
                  <a href="https://medium.com/@gahlotreyansh17/grades-dont-define-you-mindset-does-ce71c2a42440">
                  Grades Don’t Define You: Mindset Does
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
