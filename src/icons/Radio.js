import * as React from "react";
import Svg, { Circle } from "react-native-svg";

const SvgRadio = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={8} cy={8} r={5.25} stroke="#68737D" strokeWidth={1.5} />
    <Circle cx={8} cy={8} r={2} fill="#68737D" />
  </Svg>
);

export default SvgRadio;
