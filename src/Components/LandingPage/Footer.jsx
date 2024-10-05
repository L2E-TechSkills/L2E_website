import React from 'react'
import SVGComponent from '../../Assets/svgviewer-react-output';
import '../../Styles/Footer.css'
const Footer = () => {
  return (
    <div>
        <div className="footer_bg">
            <div className="subscribe_form">
                <h1>Subscribe to our newletter</h1>
                <p>Know about our new Cources first !</p>
                <input type="mail" placeholder='@gmail.com' />
                <button type="submit">Subscribe</button>
            </div>
            <div className="footer_end d-flex justify-content-between">
                <div className="logo"><SVGComponent /></div>
                
                <p>Copyright 2024-2025, All rights are reserved.</p>
                <div className="legal">
                    <a href="#" target="_blank" rel="noopener noreferrer">legal</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Privacy policy</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer