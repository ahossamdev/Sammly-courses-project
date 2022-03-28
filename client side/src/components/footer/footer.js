// import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../../images/logoo.jpeg'

import "../footer/footer.css"

function Footer (props) {
        if (props.location.pathname==="/login" || props.location.pathname==="/register") {
            return null;
          }

        return(
            <footer className="text-center text-lg-start">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block brands">
             
                    <Link to="" className="me-4 text-reset">
    
                    </Link>
                    <Link to="" className="me-4 text-reset">
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </Link>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}
    
            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        {/* <!-- Content --> */}
                        <h6 className="text-uppercase fw-bold mb-4">
                            Company name
                        </h6>
                        <p className="dowrat">
                            Sammly
                        </p>
                        <img src = {logo} className = 'img-fluid logoImg' alt = 'Logo'/>
                    </div>
                    {/* <!-- Grid column --> */}
    
                    {/* <!-- Grid column --> */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                    
                    <p>
                        <Link to="/home" className="text-reset">Home</Link>
                    </p>
                    <p>
                        <Link to="/aboutUs" className="text-reset">About Us</Link>
                    </p>
                    
                    
                    </div>
                    {/* <!-- Grid column --> */}
    
                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* <!-- Links --> */}
                   
                    <p>
                        <Link to="/courses" className="text-reset">Crash Courses</Link>
                    </p>
                    <p>
                        <Link to="/trainers" className="text-reset">Trainers</Link>
                    </p>
                    <p>
                        <Link to="/aboutUs" className="text-reset">Our Team</Link>
                    </p>
                    <p>
                        <Link to="/contact" className="text-reset">Contact Us</Link>
                    </p>
                    </div>
                    {/* <!-- Grid column --> */}
    
                    {/* <!-- Grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase fw-bold mb-4">
                            Get In Touch
                        </h6>
                        <p>
                            <FontAwesomeIcon icon={faLocationArrow} /> Cairo, NY 10012, Egypt
                        </p>
                        <p>
                        <FontAwesomeIcon icon={faEnvelope} /> info@example.com
                            {/* <i className="fas fa-envelope me-3"></i>
                            info@example.com */}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faWhatsapp} /> + 01 234 567 88
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faWhatsapp} /> + 01 234 567 89
                        </p>
                    </div>
                    {/* <!-- Grid column --> */}
                </div>
                {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}
    
            {/* <!-- Copyright --> */}
            <div className="text-center p-4">
                © 2022 Copyright:
                <Link className="text-reset fw-bold" to="#"> Our Teams</Link>
            </div>
            </footer>
        )
}

// export default Footer;
export default withRouter(Footer);
