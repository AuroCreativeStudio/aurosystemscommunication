
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter } from "react-router";
import About from './page/About';
import Service from './page/Service';
import Pages from './page/Pages';
import Blogs from './page/Blogs';
import Contact from './page/Contact';



function App() {

  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service" element={<Service />} />
        {/* <Route path="/pages" element={<Pages/>}/> */}
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact-us" element={<Contact />}/>
      </Routes>
   <Footer/>
    </>
    
  )
}

export default App
