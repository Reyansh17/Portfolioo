import React from 'react';

function Footer() {
  return (
    <footer className="min-footer sub-bg pt-30 pb-30">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 d-flex flex-column align-items-center text-center">
            <div className="logo icon-img-100 mb-3">
              <img src="/dark/assets/imgs/Reyanshlogo.png" alt="Reyansh Logo" />
            </div>
            <p className="fz-14">
              © 2024 Reyansh
              <span className="underline main-color"></span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
