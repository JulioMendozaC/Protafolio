import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './Components/Skills'
import NavBar from './Components/Navbar'
import Banner from './Components/Banner'
import Projects from './Components/Projects'
import Footer from  './Components/Footer'
import './App.css'



function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />

    </div>
  )
}

export default App
