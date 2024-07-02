import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const imgStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
  };

  const imgInnerStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div className="my-skills2">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <h6 className="sub-title main-color mb-15" data-aos="fade-down">Professional Skills</h6>
          <h2 data-aos="fade-up">
            My Skills & <span className="fw-200">Expertise</span>
          </h2>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30" data-aos="zoom-in">
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s1.png" alt="UI / UX Design" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">UI / UX Design</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30" data-aos="zoom-in" data-aos-delay="100">
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s2.png" alt="Development" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Development</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30" data-aos="zoom-in" data-aos-delay="200">
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s3.png" alt="Graphic Design" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Graphic Design</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30" data-aos="zoom-in" data-aos-delay="300">
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s5.png" alt="Sketch" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Sketch</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30" data-aos="zoom-in" data-aos-delay="400">
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s4.png" alt="WordPress" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">WordPress</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30" data-aos="zoom-in" data-aos-delay="500">
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s6.png" alt="Graphic Design" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Digital M</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
