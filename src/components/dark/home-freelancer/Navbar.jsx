import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container mx-auto px-4">
          <a className="logo icon-img-100" href="/">
            <img src="/dark/assets/imgs/Reyanshlogo.png" alt="logo" />
          </a>

          <button
            className="navbar-toggler block lg:hidden"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center hidden lg:flex"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav flex">
              <li className="nav-item" data-scroll-nav="0">
                <Link className="nav-link" to="home" smooth={true} duration={500}>
                  <span className="rolling-text">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services" smooth={true} duration={500}>
                  <span className="rolling-text">Services</span>
                </Link>
              </li>
              <li className="nav-item" data-scroll-nav="2" >
                <Link className="nav-link" to="about" smooth={true} duration={500}>
                  <span className="rolling-text">About</span>
                </Link>
              </li>
              <li className="nav-item" data-scroll-nav="3">
                <Link className="nav-link" to="portfolio" smooth={true} duration={500}>
                  <span className="rolling-text">Portfolio</span>
                </Link>
              </li>
              <li className="nav-item" data-scroll-nav="4">
                <Link className="nav-link" to="clients" smooth={true} duration={500}>
                  <span className="rolling-text">Clients</span>
                </Link>
              </li>
              <li className="nav-item" data-scroll-nav="5">
                <Link className="nav-link" to="blog" smooth={true} duration={100}>
                  <span className="rolling-text">Blog</span>
                </Link>
              </li>
              <li className="nav-item" data-scroll-nav="6">
                <Link className="nav-link" to="contact" smooth={true} duration={500}>
                  <span className="rolling-text">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="topnav hidden lg:block">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu one-scroll lg:hidden">
        <div className="logo icon-img-100">
          <img src="/dark/assets/imgs/Reyanshlogo.png" alt="" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container mx-auto px-4">
          <div className="row flex flex-wrap">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li data-scroll-nav="0">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <Link className="fill-text" to="home" smooth={true} duration={500}>
                          Home
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="1">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <Link className="fill-text" to="services" smooth={true} duration={500}>
                          Services
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="2">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <Link className="fill-text" to="about" smooth={true} duration={500}>
                          About
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="3">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <Link className="fill-text" to="portfolio" smooth={true} duration={500}>
                          Portfolio
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="4">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <Link className="fill-text" to="clients" smooth={true} duration={500}>
                          Clients
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="5">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <Link className="fill-text" to="blog" smooth={true} duration={500}>
                          Blog
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li data-scroll-nav="6">
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <Link className="fill-text" to="contact" smooth={true} duration={500}>
                          Contact
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    TIET
                    <br /> Patiala,Punjab
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="hover-this">
                        <span className="hover-anim">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Me</h6>
                  <h5>
                    <a href="#0">rgahlot_be22@thapar.edu.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="#0">+91 8112239954</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
