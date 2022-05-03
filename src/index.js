import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

//import Layout from "../components/layout"
//import SEO from "../components/seo"

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//import Work from "./components/Work"
import About from "./components/About"
//import Skills from "./components/skills"
//import Promotion from "./components/Promotion"
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar />
    <Header />
    <About />
    <Footer />
  </>
);

//<SEO title="Portfolio Template" />

//<Work></Work>
//<About></About>
//<Skills></Skills>
//<Promotion></Promotion>
//<Footer></Footer>
