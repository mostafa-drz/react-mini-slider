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

WIP
