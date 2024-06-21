'use client';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setVisible] = useState(false);
  
  const domRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'service_uige2aa',
      'template_au99tio',
      {
        from_name: form.name,
        to_name: "Reyansh Gahlot",
        from_email: form.email,
        to_email: "rgahlot_be22@thapar.edu",
        subject: form.subject,
        message: form.message,
      },
      '4VlaCkKCEWTAnBx6i'
    )
    .then(() => {
      setIsSubmitting(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, (error) => {
      setIsSubmitting(false);
      alert("Ahh, something went wrong. Please try again.");
      console.error(error);
    });
  };

  return (
    <section
      className="contact-crev section-padding bord-thin-bottom bord-thin-top"
      data-scroll-index="6"
    >
      <Toaster />
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
                  Let&#39;s Connect
                  <span className="fw-200">Collaborate and Innovate Together!</span>
                </span>
              </h2>
              <p className="mt-10">
                If you would like to work with me or just want to get in touch,
                I’d love to hear from you!
              </p>
              <div className="phone fz-30 fw-600 mt-80 underline main-color">
                <a href="tel:+8112239954">+91 8112239954</a>
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
              <form id="contact-form" ref={formRef} onSubmit={sendEmail}>
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
                        value={form.name}
                        onChange={handleChange}
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
                        value={form.email}
                        onChange={handleChange}
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
                        value={form.subject}
                        onChange={handleChange}
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
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send"}
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
