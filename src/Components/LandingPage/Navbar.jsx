import React from 'react'
import SVGComponent from '../../Assets/svgviewer-react-output';
import "../../Styles/Navbar.css"
const Navbar = () => {


    return (
        <div>
            <nav class="navbar navbar-dark navbar-expand-lg px-4 fixed-top" >
                <div class="container-fluid flex-nowrap">
                    <a class="navbar-brand text-start " href="#">
                        <SVGComponent />
                    </a>
                    <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="simple-line-icons--menu"></span>
                    </button>
                    <div class="offcanvas offcanvas-end transparent text-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header text-white">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">L2E TechSkills</h5>
                            <button type="button" class="btn-close btn-close-white text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body text-white">
                            <ul class="navbar-nav justify-space-between align-items-center flex-grow-1  text-dark" >
                                <li class="nav-item">
                                    <a class="nav-link active color-prime " aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active color-prime" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active color-prime" aria-current="page" href="#">Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active color-prime" aria-current="page" href="#">Project</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active color-prime" aria-current="page" href="#">Course</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active color-prime" aria-current="page" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <button class="btn btn-new" type="submit">Enquire Now!</button>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar