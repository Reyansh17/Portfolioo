import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
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
          <h6 className="sub-title main-color mb-15">Professional Skills</h6>
          <h2>
            My Skills & <span className="fw-200">Expertise</span>
          </h2>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <motion.div className="item mb-30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s1.png" alt="UI / UX Design" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">UI / UX Design</h6>
            </motion.div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <motion.div className="item mb-30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ delay: 0.1 }}>
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s2.png" alt="Development" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Development</h6>
            </motion.div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <motion.div className="item mb-30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ delay: 0.1 }}>
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s3.png" alt="Development" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Graphic Designing</h6>
            </motion.div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <motion.div className="item mb-30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ delay: 0.1 }}>
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s4.png" alt="Development" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Digital Marketing</h6>
            </motion.div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <motion.div className="item mb-30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ delay: 0.1 }}>
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s5.png" alt="Development" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Embedded Systems</h6>
            </motion.div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <motion.div className="item mb-30" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ delay: 0.1 }}>
              <div className="box-bord main-bg">
                <div className="img" style={imgStyle}>
                  <img src="/dark/assets/imgs/resume/s6.png" alt="Development" style={imgInnerStyle} />
                </div>
              </div>
              <h6 className="fz-18 mt-10 text-center">Ai/Ml</h6>
            </motion.div>
          </div>
          {/* Add motion.div for each item similarly */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
