import React, { useState, useCallback } from "react";
var SliderContext = React.createContext({
    handleNext: function () { },
    handlePrevious: function () { },
    handleGoToFirst: function () { },
    handleGoToLast: function () { },
    step: 0,
    isLast: false,
    isFirst: false,
});
export var useSlider = function () {
    var sliderContext = React.useContext(SliderContext);
    if (!sliderContext) {
        throw Error("You can't use slider without the Slider Provider. Wrap your components with the Slider.Provider");
    }
    return sliderContext;
};
function Slider(props) {
    var _a = useState(0), step = _a[0], setStep = _a[1];
    var children = React.Children.toArray(props.children);
    var current = children[step];
    var handleNext = function () {
        if (step >= children.length - 1) {
            return;
        }
        setStep(function (s) { return s + 1; });
    };
    var handlePrevious = useCallback(function () {
        if (step <= 0) {
            return;
        }
        setStep(function (s) { return s - 1; });
    }, [step]);
    var handleGoToFirst = useCallback(function () {
        setStep(0);
    }, []);
    var handleGoToLast = useCallback(function () {
        setStep(children.length - 1);
    }, [children.length]);
    var toolbarStyle = getToolbarStyle(props.toolbarPosition);
    console.log("Toolbar Style", toolbarStyle);
    return (React.createElement(SliderContext.Provider, { value: {
            handleNext: handleNext,
            handlePrevious: handlePrevious,
            handleGoToFirst: handleGoToFirst,
            handleGoToLast: handleGoToLast,
            step: step,
            isFirst: step === 0,
            isLast: step === children.length - 1,
        } },
        React.createElement("div", { className: props.className, style: props.style },
            current,
            React.createElement("div", { className: "slider-toolbar", style: toolbarStyle }, props.toolbar ? props.toolbar : React.createElement(DefaultToolbar, null)))));
}
function DefaultToolbar() {
    var _a = useSlider(), handleNext = _a.handleNext, handleGoToFirst = _a.handleGoToFirst, handleGoToLast = _a.handleGoToLast, handlePrevious = _a.handlePrevious, isFirst = _a.isFirst, isLast = _a.isLast;
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handleNext, disabled: isLast }, "Next"),
        React.createElement("button", { onClick: handlePrevious, disabled: isFirst }, "Previous"),
        React.createElement("button", { onClick: handleGoToFirst, disabled: isFirst }, "Go To First"),
        React.createElement("button", { onClick: handleGoToLast, disabled: isLast }, "Go To Last")));
}
function getToolbarStyle(tbp) {
    if (typeof tbp === "undefined") {
        return {};
    }
    if (typeof tbp !== "string") {
        return tbp;
    }
    else {
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
//# sourceMappingURL=Slider.js.map