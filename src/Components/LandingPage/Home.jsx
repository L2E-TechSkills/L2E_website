import React, { useState, useEffect } from 'react';
import "../../Styles/Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Delay the visibility of content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay before content shows up

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div style={{ margin: "0px 30px" }}>
      <div className="img">
        <div className={`content ${isVisible ? 'visible' : ''}`}>
          <h1 className='heading'> Explore <span className='head-span'>tech world</span> with us</h1>
          <p className="para">Discover the possibilities to learn!</p>
          <button className='explore'>Explore Now! <i className="fa-solid fa-arrow-right fa-lg"></i></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
