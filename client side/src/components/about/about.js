import about from "../../images/about.jpg";
import about2 from "../../images/about-img.jpeg";
import { Button } from "react-bootstrap";
import "../about/about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className=" d-flex row justify-content-center ">
          <div className="container col-sm-12 col-md-6">
            <h2 className="head-title">About Sammly</h2>
            <ul>
              <li>
                <div className="description">
                  <div className="_4bl9">
                    <div className="_3-8w ">
                      sammly offers almost free design training courses
                      (photoshop - illustrator - Lightroom) for youth to be
                      world leaders in design field. "
                    </div>
                    <Button
                      className={"opacity-75 text-danger"}
                      style={{ width: "6rem", marginTop: "10px" }}
                      variant="outline-warning"
                    >
                      <Link
                        to={"/login"}
                        style={{ textDecoration: "none" }}
                        aria-current="page"
                      >
                        Let's go
                      </Link>
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 d-none d-md-block">
            <div className="about-img">
              <img className="img-fluid" src={about} alt="..." />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 ">
            <div className="card shadow-sm">
              <div className="card-img">
                <img src={about2} alt="..." />
                <h3>Vision</h3>
              </div>
              <div className="card-body">
                <p>
                  <p>
                    An empowered community of well-educated and skilled youth
                    leading a better future
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-img">
                <img src={about2} alt="..." />
                <h3>Mission</h3>
              </div>
              <div className="card-body">
                <p>
                  <p>
                    Connecting community stakeholders with youth through
                    Adabtable, Customized and Suitable Programs
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 m-auto">
            <div className="card shadow-sm">
              <div className="card-img">
                <img src={about2} alt="..." />
                <h3>Services</h3>
              </div>
              <div className="card-body">
                <p>
                  <p>
                    Training, Designing ,Projects Management with photoshop ,
                    illustrator and lightroom
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
