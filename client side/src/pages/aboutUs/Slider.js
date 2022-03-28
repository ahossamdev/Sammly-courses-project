import React from 'react';
import ourteam from './img/new1.jpg' ;
import ourplan from './img/new2.jpg' ;
import join from './img/new3.jpg' ;



function Slider () {
       return(
           
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ourteam}className="d-block w-100" alt="ourteam"/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h4 className="our"> welcome to our team</h4> */}
        {/* <p>talk about our team</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={ourplan} className="d-block w-100" alt="ourplan"/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5 className="plan">second slide our plan</h5> */}
        {/* <p>Some representative placeholder content for the second slide.</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src={join} className="d-block w-100" alt="join"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="join"> </h5>
        <p className="join2"> </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       );
    }

    export default Slider;






