import React, { useState, useCallback, CSSProperties } from "react";

interface ProviderProps {
  className?: string;
  style?: CSSProperties;
  children: React.ReactElement[];
  toolbar?: React.ReactElement;
}
interface ISlider {
  handleNext: () => void;
  handlePrevious: () => void;
  handleGoToFirst: () => void;
  handleGoToLast: () => void;
  step: number;
  isLast: boolean;
  isFirst: boolean;
}
const SliderContext = React.createContext<ISlider>({
  handleNext: () => {},
  handlePrevious: () => {},
  handleGoToFirst: () => {},
  handleGoToLast: () => {},
  step: 0,
  isLast: false,
  isFirst: false,
});

export const useSlider = () => {
  const sliderContext = React.useContext(SliderContext);
  if (!sliderContext) {
    throw Error(
      "You can't use slider without the Slider Provider. Wrap your components with the Slider.Provider"
    );
  }
  return sliderContext;
};

function Slider(props: ProviderProps) {
  const [step, setStep] = useState<number>(0);
  const children = React.Children.toArray(props.children);
  const current: any = children[step];

  const handleNext = () => {
    if (step >= children.length - 1) {
      return;
    }
    setStep((s) => s + 1);
  };
  const handlePrevious = useCallback(() => {
    if (step <= 0) {
      return;
    }
    setStep((s) => s - 1);
  }, [step]);
  const handleGoToFirst = useCallback(() => {
    setStep(0);
  }, []);
  const handleGoToLast = useCallback(() => {
    setStep(children.length - 1);
  }, [children.length]);

  return (
    <SliderContext.Provider
      value={{
        handleNext,
        handlePrevious,
        handleGoToFirst,
        handleGoToLast,
        step,
        isFirst: step === 0,
        isLast: step === children.length - 1,
      }}
    >
      <div className={props.className} style={props.style}>
        {current}
        {props.toolbar ? props.toolbar : <DefaultToolbar />}
      </div>
    </SliderContext.Provider>
  );
}

function DefaultToolbar() {
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
      <button onClick={handleNext} disabled={isLast}>
        Next
      </button>
      <button onClick={handlePrevious} disabled={isFirst}>
        Previous
      </button>
      <button onClick={handleGoToFirst} disabled={isFirst}>
        Go To First
      </button>
      <button onClick={handleGoToLast} disabled={isLast}>
        Go To Last
      </button>
    </div>
  );
}
export default Slider;
