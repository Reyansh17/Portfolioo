'use client';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';



function Contact() {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9x164y6', 'template_wyaswos', e.target, 'H2kylh8ByiKce5ec3')
      .then((result) => {
          console.log(result.text);
          toast('Good Job!', {
            icon: '👏',
          });
          
         
      
      }, (error) => {
          console.log(error.text);
          alert('Failed to send email.');
      });
  };

  return (
    <section
      className="contact-crev section-padding bord-thin-bottom bord-thin-top"
      data-scroll-index="6"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head md-mb80">
              <h6 className="sub-title main-color mb-15 wow fadeInUp">
                Get In Touch
              </h6>
              <h2
                className={`text-u ls1 d-rotate ${isVisible ? 'animated' : ''}`}
                ref={domRef}
              >
                <span className="rotate-text">
                  Let&#39; Connect
                  <span className="fw-200">Collaborate and Innovate Together!</span>
                </span>
              </h2>
              <p className="mt-10">
                If you would like to work with me or just want to get in touch,
                I’d love to hear from you!
              </p>
              <div className="phone fz-30 fw-600 mt-80 underline main-color">
                <a href="#0">+91 8112239954</a>
              </div>
              <ul className="rest social-text d-flex mt-40">
                <li className="mr-30">
                  <a href="https://github.com/Reyansh17" className="hover-this">
                    <span className="hover-anim">Github</span>
                  </a>
                </li>
                
                <li className="mr-30">
                  <a href="https://www.linkedin.com/in/reyanshgahlot/" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/reyansh_747?igsh=aGR5YzBrYXdkcG1l" className="hover-this">
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form id="contact-form" onSubmit={sendEmail}>
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&#39;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
