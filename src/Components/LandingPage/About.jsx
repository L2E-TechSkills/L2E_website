import React from 'react'
import "../../Styles/About.css"
import serviceimg from '../../Assets/service.jpg';
import aboutimg from '../../Assets/aboutimg.jpg';

import about from "../../Assets/journal.png"
import service from "../../Assets/customer-review.png"
import founder from "../../Assets/happy-indian-woman-working-laptop-freelancer-work-from-home-digital-india-concept_846334-1077.jpg"
const About = () => {
    return (
        <div>
            <div className="row about-intro justify-content-around">
                <div className="col-xl-5 col-lg-5">
                    <div className="tp-slider-exprience">
                        <div className="tp-slider-exprience_content">
                            <h4 className="tp-slider-exp-title">24 Year of Experience</h4>
                            <p>Lorem Ipsum is simply dummy text of printing and typesetting industry Ipsum is dummy text of
                                the printing industry.</p>
                        </div>
                        <div className="tp-slider-exprience_client-info d-flex align-items-center">
                            <div className="tp-slider-exprience_img">
                                <img src={founder} alt="image not found" />
                            </div>
                            <div className="tp-slider-exprience_meta">
                                <h5 className="tp-client-name" style={{color:"#f8991d", marginBottom:"0px"}}>Sivashankari Thirugnanam</h5>
                                <span>Founder of <span >L2E TechSkills</span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    <ul class="cards">
                        <li>
                            <a href="" class="card">
                                <img src={serviceimg} class="card__image" alt="" />
                                <div class="card__overlay">
                                    <div class="card__header">
                                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className='card_thumb_bg'>
                                        <img class="card__thumb" src={service} alt="" />
                                        </div>
                                        <div class="card__header-text">
                                            <h3 class="card__title">Service</h3>
                                        </div>
                                    </div>
                                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="" class="card">
                                <img src={aboutimg} class="card__image" alt="" />
                                <div class="card__overlay">
                                    <div class="card__header">
                                        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className='card_thumb_bg'>
                                        <img class="card__thumb" src={about} alt="" />
                                        </div>
                                        <div class="card__header-text">
                                            <h3 class="card__title">About Us</h3>
                                        </div>
                                    </div>
                                    <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                                </div>
                            </a>
                        </li>
                      
                    </ul>

                </div>
            </div>


        </div>
    )
}

export default About