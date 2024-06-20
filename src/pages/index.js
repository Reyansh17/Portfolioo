'use client';
import { Helmet } from 'react-helmet';
import Lines from '../components/dark/common/Lines';
import ProgressScroll from '../components/dark/common/ProgressScroll';
import Cursor from '../components/dark/common/cusor';
import LoadingScreen from '../components/dark/common/loader';
import Amazing from '../components/dark/landing-preview/Amazing';
import Footer from '../components/dark/landing-preview/Footer';
import Header from '../components/dark/landing-preview/Header';
import InnerPages from '../components/dark/landing-preview/InnerPages';
import NavTop from '../components/dark/landing-preview/NavTop';
import Porfolios from '../components/dark/landing-preview/Porfolios';
import StartDemos from '../components/dark/landing-preview/StartDemos';
import StartSection from '../components/dark/landing-preview/StartSection';
import Testimonials from '../components/dark/landing-preview/Testimonials';
import Updates from '../components/dark/landing-preview/Updates';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>infolio</title>
        <link rel="icon" href="/dark/imgs/favicon.ico" />
        <link rel="shortcut icon" href="/dark/imgs/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/plugins.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/landing-preview/css/preview-style.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/dark/assets/css/satoshi.css"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght..200;300;400;500;600;700&display=swap"
        />
        <script src="/dark/assets/js/scripts.js"></script>
        <script src="/dark/assets/js/smoother-script.js"></script>
      </Helmet>
      <body className="sub-bg">
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <NavTop />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="sub-bg">
              <Header />
              <StartDemos />
              <StartSection />
              <InnerPages />
              <Porfolios />
              <Amazing />
              <Updates />
              <Testimonials />
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
