import test1 from "../../images/design3.jpeg";
import test2 from "../../images/design1.jpeg";
import test3 from "../../images/design5.jpeg";
import test4 from "../../images/design6.jpeg";
import "../slider/slider.css";

function Slider() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={test1} className="w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Designing journy</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={test2} className="w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Improve Your Skills Now</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img src={test3} className="w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Improve Your Skills Now</h5>
          </div>
        </div>

        <div className="carousel-item">
          <img src={test4} className="w-100 img-fluid" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Improve Your Skills Now</h5>
          </div>
        </div>
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
