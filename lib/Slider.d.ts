import React, { CSSProperties } from "react";
declare type ToolbarPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | {
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
export declare const useSlider: () => ISlider;
declare function Slider(props: ProviderProps): JSX.Element;
export default Slider;
//# sourceMappingURL=Slider.d.ts.map