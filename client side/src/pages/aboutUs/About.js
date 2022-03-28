import React from "react";
import "./about.css";
import Slider from "./Slider";
// import {} from 'react-router-dom';
import { Link } from "react-router-dom";
import ahmed from "./img/ahmed.jpeg";
import mohamed from "./img/mohamed.jpeg";
import kerolos from "./img/kerolos.jpeg";
import marina from "./img/marina.jpeg";
import samah from "./img/samah.jpg";
import heba from "./img/heba.jpg";
// import FormSignup from './FormFile/FormSignup';

function About() {
  return (
    <div className="about-section">
      <Slider />
      {/* first slide */}
      <section className="section-ourteam">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center ">
              <div className="section-ourteam-main-heading"> our team</div>
              <div className="underline mx-auto"></div>
              {/* our team card 1 */}
              {/* ahmed hossam */}
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#ahmed"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 class="nameincard"> Ahmed Hossam </h5>
                    </button>
                  </h2>
                  <div
                    id="ahmed"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="centername">
                        <img src={ahmed} class="d-block1" alt="ourteam" />
                      </div>
                      <strong> Eng /Ahmed Hossam </strong>
                      <p> full stack developer</p>
                    </div>
                  </div>
                </div>
                {/* mohamed nabil */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#mohamed"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 class="nameincard">Mohamed Nabil </h5>
                    </button>
                  </h2>
                  <div
                    id="mohamed"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="centername">
                        <img src={mohamed} class="d-block1" alt="ourteam" />
                      </div>
                      <strong> Eng /Mohamed Nabil </strong>
                      <p> full stack developer</p>
                    </div>
                  </div>
                </div>
                {/* kerolos */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#kerolos"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 class="nameincard"> Kerolos Ashraf </h5>
                    </button>
                  </h2>
                  <div
                    id="kerolos"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="centername">
                        <img src={kerolos} class="d-block1" alt="ourteam" />
                      </div>
                      <strong> Eng / Kerolos Ashraf </strong>
                      <p> full stack developer</p>
                    </div>
                  </div>
                </div>
                {/* marina */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#marina"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 class="nameincard"> Marina Romany </h5>
                    </button>
                  </h2>
                  <div
                    id="marina"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="centername">
                        <img src={marina} class="d-block1" alt="ourteam" />
                      </div>
                      <strong> Eng /Marina Romany</strong>
                      <p> full stack developer</p>
                    </div>
                  </div>
                </div>
                {/* samah */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#samah"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 class="nameincard"> Samah Mostafa </h5>
                    </button>
                  </h2>
                  <div
                    id="samah"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="centername">
                        <img src={samah} class="d-block1" alt="ourteam" />
                      </div>
                      <strong> Eng /Samah Mostafa </strong>
                      <p> full stack developer</p>
                    </div>
                  </div>
                </div>

                {/* heba */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#heba"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5 class="nameincard"> Heba Mohamed </h5>
                    </button>
                  </h2>
                  <div
                    id="heba"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div class="centername">
                        <img src={heba} class="d-block1" alt="ourteam" />
                      </div>
                      <strong> Eng /Heba Mohamed </strong>
                      <p> full stack developer</p>
                    </div>
                  </div>
                </div>
              </div>

              <h6>We are team in ITI Track MEARN full stack</h6>
            </div>
          </div>
        </div>
      </section>

      {/* second slide */}
      <section className="section-ourplan">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              {/* <h3 className='section-ourplan-main-heading'> our plan</h3> */}
              <div className="underline mx-auto"></div>
              <h6>
                Our plan is to create a site that will benefit all those who
                want to become a professional in design, photoshop, illustrator,
                lightroom and all design programs, especially Minya students On
                our site you will find free and paid courses, our instructors
                are distinguished and have experience, we wish you success
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* third slide */}
      <section className="section-joinus">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              {/* <h3 className='section-joinus-main-heading'>if you want to join our team </h3> */}
              <h6> note: it's onle for instructors</h6>
              <div className="underline mx-auto"></div>
              <p>please click in this button and contact us</p>
              <Link to="/formtrainer" className="btn btn-warning shadow">
                {" "}
                contact us{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
