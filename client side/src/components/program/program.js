import { Link } from "react-router-dom";
// import prog1 from "../../images/prog1.jpeg";
// import prog2 from "../../images/prog2.jpg";
// import prog3 from "../../images/prog3.jpeg";
// import prog4 from "../../images/prog4.png";
// import prog5 from "../../images/prog5.png";
// import prog6 from "../../images/prog6.png";
import "../program/program.css";
// import Dome from "../dome/dome"
function Program() {
  return (
    <div
      style={{
        background: "#be9d9d52",
        paddingTop: "1px",
        paddingBottom: "20px",
        margin: "0px",
      }}
    >
      <section id="programs">
        <div className="container">
          <h2 className="head-title my-5">Current Programs</h2>
          <div className="owl-carousel owl-theme owl-programs owl-loaded owl-drag">
            <div className="item">
              <div className={"flex-column"}>
                <div className="card pro1 shadow-sm ">
                  <Link href="#"></Link>
                </div>
                <h4 className={"title1"}>Photoshop</h4>
              </div>

              <div className={"flex-column"}>
                <div className="card pro2 shadow-sm">
                  <Link href="#"></Link>
                </div>
                <h4 className={"title1"}>Illustrator</h4>
              </div>
              <div className={"flex-column"}>
                <div className="card pro3 shadow-sm">
                  <Link href="#"></Link>
                </div>
                <h4 className={"title1"}>Lightroom</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Program;
