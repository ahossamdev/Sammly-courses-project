import React from "react";
import Slider from "../../components/slider/slider";
import Program from "../../components/program/program";
import About from "../../components/about/about";
export default function Home() {
  return (
    <div onLoad={window.scrollTo(0, 0)}>
      <Slider />
      <Program />
      <About />
      {/* <Services /> */}
    </div>
  );
}
