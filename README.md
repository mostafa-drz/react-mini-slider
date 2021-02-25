# react-mini-slider

## Install

Yarn

```
yarn add react-mini-slider
```

npm

```
npm install react-mini-slider
```

## Simple Example

```
import React from "react";
import "./App.css";
import { Slider } from "react-mini-slider";

function App() {
  return (
    <div className="App">
      <Slider className="slider-container" toolbarPosition="bottom-left">
        <SlideA />
        <SlideB />
        <SlideC />
        <SlideD />
      </Slider>
    </div>
  );
}

function SlideA() {
  return <h1>I am Slide A</h1>;
}
function SlideB() {
  return <h1>I am Slide B</h1>;
}
function SlideC() {
  return <h1>I am Slide C</h1>;
}
function SlideD() {
  return <h1>I am Slide D</h1>;
}
export default App;

```

## Custom toolbar example

If you need a custom toolbar which in most cases you do (mine is really ugly, sorry) then you can build your toolbar component and pass it to the `Slider`. Here is an example:

```
import React from "react";
import "./App.css";
import { Slider, useSlider } from "react-mini-slider";

function App() {
  return (
    <div className="App">
      <Slider
        className="slider-container"
        toolbarPosition={{ top: 0, right: "30px" }}
        toolbar={<FancyToolbar />}
      >
        <SlideA />
        <SlideB />
        <SlideC />
        <SlideD />
      </Slider>
    </div>
  );
}

function SlideA() {
  return (
    <img
      src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
      alt="horse-1"
    />
  );
}
function SlideB() {
  return (
    <img
      src="https://images.unsplash.com/photo-1504310977373-186d29f99322?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="horse-2"
    />
  );
}
function SlideC() {
  return (
    <img
      src="https://images.unsplash.com/photo-1553284966-19b8815c7817?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="horse-3"
    />
  );
}
function SlideD() {
  return (
    <img
      src="https://images.unsplash.com/photo-1566251037378-5e04e3bec343?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9yc2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      alt="horse-4"
    />
  );
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
    <>
      <button onClick={handleNext} disabled={isLast} className={`fancy-button`}>
        Next
      </button>
      <button
        onClick={handlePrevious}
        disabled={isFirst}
        className="fancy-button"
      >
        Previous
      </button>
      <button
        onClick={handleGoToFirst}
        disabled={isFirst}
        className="fancy-button"
      >
        Go To First
      </button>
      <button
        onClick={handleGoToLast}
        disabled={isLast}
        className="fancy-button"
      >
        Go To Last
      </button>
    </>
  );
}
export default App;

```
