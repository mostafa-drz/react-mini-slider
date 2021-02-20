import React from "react";
import "./App.css";
import Slider, { useSlider } from "./Slider";

function App() {
  return (
    <div className="App">
      <Slider
        className="slider-container"
        style={{ color: "red" }}
        toolbar={<FancyToolbar />}
      >
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

function FancyToolbar() {
  const {
    handleNext,
    handleGoToFirst,
    handleGoToLast,
    handlePrevious,
    isFirst,
    isLast,
  } = useSlider();
  return (
    <div>
      <button onClick={handleNext} disabled={isLast} className="btn-fancy">
        Next
      </button>
      <button onClick={handlePrevious} disabled={isFirst} className="btn-fancy">
        Previous
      </button>
      <button
        onClick={handleGoToFirst}
        disabled={isFirst}
        className="btn-fancy"
      >
        Go To First
      </button>
      <button onClick={handleGoToLast} disabled={isLast} className="btn-fancy">
        Go To Last
      </button>
    </div>
  );
}
export default App;
