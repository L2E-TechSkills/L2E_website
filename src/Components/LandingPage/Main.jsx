import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Footer from './Footer'
import Enquiry from './Enquiry'
import Service from './Service'


const Main = () => {
  return (
    <div>
        <div className="container-fluid p-0">
            <Navbar/>
            <Home/>
            {/* <Service/> */}
            {/* <About/> */}
            <Enquiry/>
            <Footer/>
        </div>
    </div>
  )
}

export default Main