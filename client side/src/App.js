import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
// import Slider from "./components/slider/slider";
// import Program from './components/program/program';
// import About from './components/about/about';
import Login from "./pages/login/Login";
import Registration from "./pages/register/Registration";
import Home from "./pages/home/Home";
import Trainers from "./pages/trainers/trainers";
import ContactUs from "./pages/contact/contactUs";
import About2 from "./pages/aboutUs/About";
import Course from "./pages/course/Course";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import NotFound from "./components/notFound/NotFound";
import UserProfile from "./pages/userProfile/UserProfile";
// import Review from "./components/review/review";
// import Dome from "./components/dome/dome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EditUserProfile from "./pages/editUserProfile/editProfile";
import VideoComp from "./pages/videoListComp/VideoComp";
import TrainerForm from "./pages/trainersform/TrainerForm";
import Thanks from "./pages/trainerformsubmit/Thanks";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <EditUserProfile/> */}
        <Switch>
          <Route path={"/"} exact component={Home}></Route>
          <Route path={"/login"} exact component={Login}></Route>
          <Route
            path={"/editprofile/:id"}
            exact
            component={EditUserProfile}
          ></Route>
          <Route path={"/course/:id/video"} exact component={VideoComp}></Route>
          <Route path={"/profile/:id"} exact component={UserProfile}></Route>
          <Route path={"/register"} exact component={Registration}></Route>
          <Route path={"/home"} exact component={Home}></Route>
          <Route path={"/trainers"} exact component={Trainers}></Route>
          <Route path={"/formtrainer"} exact component={TrainerForm}></Route>
          <Route path={"/success"} exact component={Thanks}></Route>
          <Route path={"/contact"} exact component={ContactUs}></Route>
          <Route path={"/aboutUs"} exact component={About2}></Route>
          <Route path={"/courses"} exact component={Course}></Route>
          <Route
            path={"/coursedetails/:id"}
            exact
            component={CourseDetails}
          ></Route>
          <Route path={"*"} exact component={NotFound}></Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
