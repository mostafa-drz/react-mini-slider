import React from "react";
import "./App.css";
import Slider from "./Slider";

function App() {
  return (
    <div className="App">
      <Slider className="slider">
        <SlideA />
        <SlideB />
        <SlideC />
      </Slider>
    </div>
  );
}

function SlideA(props: any) {
  return <div>Step A</div>;
}
function SlideB(props: any) {
  return <div>Step B</div>;
}
function SlideC(props: any) {
  return <div>Step C</div>;
}

export default App;
