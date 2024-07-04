'use client';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Default Subject", // Set a default subject since it's hidden
    message: "",
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

    const currentRef = domRef.current;
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_cw2ci7n";
    const templateId = "template_e0qkqbx";
    const publicKey = "nZFn9y8inZrE6ZsoE";

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
    };

    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data);
      setIsSubmitting(false);
      setForm({
        name: "",
        email: "",
        subject: "Default Subject",
        message: "",
      });
      alert('I wil contact you soon')
      toast.success("Your message has been sent");
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      toast.error("Ahh, something went wrong. Please try again.");
    }
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
                  Let's Connect
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
              <form  ref={formRef} onSubmit={sendEmail}>
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
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
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12" style={{ display: 'none' }}>
                    <div className="form-group mb-30">
                      <input
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
