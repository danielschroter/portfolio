import React from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Experience from './components/experience/Experience';
import Testimonials from './components/testimonials/Testimonials';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


export const App = () => {
  return (
    <>

    <Header></Header>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact></Contact>
    <Footer></Footer>
    
    </>
  )
}
