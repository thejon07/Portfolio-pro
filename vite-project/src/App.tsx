import React,{useRef} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home/Home'
import Experties from './components/Experties/Experties'
import About from './components/About/About'
import Recent from './components/Recent/Recent'
import Contact from "./components/Contact/Contact"
import Footer from './components/Footer/Footer'

const App:React.FC =()=> {

  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHome= () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Navbar scrollToAbout={scrollToAbout} scrolltohome={scrollToHome} scrolltocontact={scrollToContact} />
      <Home homeref={scrollToHome}/>
      <Experties/>
      <About aboutref={aboutRef}/>
      <Recent/>
      <Contact contactref={contactRef}/>
      <Footer/>
    </>
  )
}

export default App
