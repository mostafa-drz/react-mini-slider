import React, { useState, useCallback, CSSProperties } from "react";

type ToolbarPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | {
      left?: number | string;
      right?: number | string;
      bottom?: number | string;
      top?: number | string;
    };

interface ProviderProps {
  className?: string;
  style?: CSSProperties;
  children: React.ReactElement[];
  toolbar?: React.ReactElement;
  toolbarPosition?: ToolbarPosition;
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

  const toolbarStyle = getToolbarStyle(props.toolbarPosition);

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
        <div className="slider-toolbar" style={toolbarStyle}>
          {props.toolbar ? props.toolbar : <DefaultToolbar />}
        </div>
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

function getToolbarStyle(tbp: ToolbarPosition | undefined): CSSProperties {
  if (typeof tbp === "undefined") {
    return {};
  }
  if (typeof tbp !== "string") {
    return tbp;
  } else {
    switch (tbp) {
      case "top-left":
        return {
          top: 0,
          left: 0,
        };
      case "top-right":
        return {
          top: 0,
          right: 0,
        };
      case "top-center":
        return {
          left: "50%",
          transform: "translateX(-50%)",
          top: 0,
        };
      case "bottom-left":
        return {
          bottom: 0,
          left: 0,
        };
      case "bottom-right":
        return {
          bottom: 0,
          right: 0,
        };
      case "bottom-center":
        return {
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 0,
        };
      default:
        return {};
    }
  }
}
export default Slider;
