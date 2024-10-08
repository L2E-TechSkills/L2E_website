import React from 'react'
import SVGComponent from '../../Assets/svgviewer-react-output';
import '../../Styles/Footer.css'
const Footer = () => {
  return (
    <div className='container-fluid p-0'>
        <div className="footer_bg">
            <div className="subscribe_form">
                <h1 className='footer-head'>Subscribe to our newletter</h1>
                <p className='footer-para'>Know about our new Cources first !</p>
               <div style={{width:"70%"}}>
               <input className='footer-input' type="mail" placeholder='@gmail.com' />
               <input className='footer-btn' value={"Subscribe"} type="submit"/>
               </div>
            </div>
            <div className="footer_end d-flex justify-content-between align-items-center">
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