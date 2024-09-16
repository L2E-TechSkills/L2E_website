import React from 'react'
import SVGComponent from '../../Assets/svgviewer-react-output';
import "../../Styles/Navbar.css"
const Navbar = () => {


    return (
        <div>
            <nav class="navbar navbar-dark navbar-expand-lg px-3 fixed-top" style={{backgroundColor:"#ffeee3"}}>
                <div class="container-fluid flex-nowrap">
                    <a class="navbar-brand text-start " href="#">
                        <SVGComponent />
                    </a>
                    <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-dark"></span>
                    </button>
                    <div class="offcanvas offcanvas-end transparent text-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">L2E TechSkills</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3 text-dark" >
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="#">Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="#">Project</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="#">Course</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="#">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-dark" aria-current="page" href="#">
                                    <button class="btn btn-new" type="submit">Enquire Now!</button>
                                    </a>
                                </li>
                                
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar