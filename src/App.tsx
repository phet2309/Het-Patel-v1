
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Slider from './components/Slider';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Slider />
      <Contact />
    </>
  )
}

export default App
