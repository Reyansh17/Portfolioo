import { Helmet } from 'react-helmet';
import Lines from '../../components/dark/common/Lines';
import ProgressScroll from '../../components/dark/common/ProgressScroll';
import Cursor from '../../components/dark/common/cusor';
import LoadingScreen from '../../components/dark/common/loader';
import About from '../../components/dark/home-freelancer/About';
import Blog from '../../components/dark/home-freelancer/Blog';
import Contact from '../../components/dark/home-freelancer/Contact';
import Footer from '../../components/dark/home-freelancer/Footer';
import Header from '../../components/dark/home-freelancer/Header';
import Navbar from '../../components/dark/home-freelancer/Navbar';
import Portfolio from '../../components/dark/home-freelancer/Portfolio';
import Services from '../../components/dark/home-freelancer/Services';
import Skills from '../../components/dark/home-freelancer/Skills';
import Testimonials from '../../components/dark/home-freelancer/Testimonials';

export default function HomeFreelancer() {
  return (
    <>
      <Helmet>
        <title>Reyansh</title>
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
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />

        <div id="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <main className="main-bg">
              <Header />
              <Services />
              <About />
              <Skills />
              <Portfolio />
              <Testimonials />
              <Blog />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </>
  );
}
