import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Slider>
        <SlideA />
        <SlideB />
        <SlideC />
      </Slider>
    </div>
  );
}

function SlideA(props: any) {
  return (
    <div>
      Step A
      <button onClick={props.handleNext} disabled={props.isLast}>
        Next
      </button>
      <button onClick={props.handlePrevious} disabled={props.isFirst}>
        Previous
      </button>
      <button onClick={props.handleGoToFirst} disabled={props.isFirst}>
        Go To First
      </button>
      <button onClick={props.handleGoToLast} disabled={props.isLast}>
        Go To Last
      </button>
    </div>
  );
}
function SlideB(props: any) {
  return (
    <div>
      Step B
      <button onClick={props.handleNext} disabled={props.isLast}>
        Next
      </button>
      <button onClick={props.handlePrevious} disabled={props.isFirst}>
        Previous
      </button>
      <button onClick={props.handleGoToFirst} disabled={props.isFirst}>
        Go To First
      </button>
      <button onClick={props.handleGoToLast} disabled={props.isLast}>
        Go To Last
      </button>
    </div>
  );
}
function SlideC(props: any) {
  return (
    <div>
      Step C
      <button onClick={props.handleNext} disabled={props.isLast}>
        Next
      </button>
      <button onClick={props.handlePrevious} disabled={props.isFirst}>
        Previous
      </button>
      <button onClick={props.handleGoToFirst} disabled={props.isFirst}>
        Go To First
      </button>
      <button onClick={props.handleGoToLast} disabled={props.isLast}>
        Go To Last
      </button>
    </div>
  );
}
function Slider(props: { children: any }) {
  const [step, setStep] = useState<number>(0);
  const children = React.Children.toArray(props.children);
  const current: any = children[step];

  const handleNext = () => {
    if (step >= children.length - 1) {
      return;
    }
    setStep((s) => s + 1);
  };
  const handlePrevious = () => {
    if (step <= 0) {
      return;
    }
    setStep((s) => s - 1);
  };
  const handleGoToFirst = () => {
    setStep(0);
  };
  const handleGoToLast = () => {
    setStep(children.length - 1);
  };
  let elementWithClassName = React.cloneElement(current, {
    handleNext,
    handlePrevious,
    handleGoToFirst,
    handleGoToLast,
    step,
    isLast: step === children.length - 1,
    isFirst: step === 0,
  });

  return elementWithClassName;
}
export default App;
