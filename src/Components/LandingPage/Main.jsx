import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import Enquiry from './Enquiry'


const Main = () => {
  return (
    <div>
        <div className="container-fluid">
            <Navbar/>
            <Home/>
            <About/>
            <Enquiry/>
            {/* <Footer/> */}
        </div>
    </div>
  )
}

export default Main