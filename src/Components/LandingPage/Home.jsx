import React from 'react'
import "../../Styles/Home.css"
const Home = () => {
  return (
    <div style={{margin:"0px 30px"}}>
          <div className="img">

            <div className="content">
              <h1 className='heading'> Explore <span className='head-span'>tech world</span> with us</h1>
              <p className="para">Discover the posibilities to learn!</p>
              <button className='explore'>Explore Now! <i class="fa-solid fa-arrow-right fa-lg"></i></button>
            </div>
          </div>
          
    </div>
  )
}

export default Home