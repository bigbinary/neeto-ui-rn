import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const SvgRadioInactive = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={8.25} stroke="#68737D" strokeWidth={1.5} />
  </Svg>
);

export default SvgRadioInactive;
