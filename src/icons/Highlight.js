import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHighlight = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.523 20H6v-4.523c0-.464.184-.909.512-1.236L17.53 4.002A1.747 1.747 0 0 1 20 4l.002.002L21.5 5.527c.683.682.684 1.788.002 2.47L21.5 8l-9.741 11.488a1.75 1.75 0 0 1-1.236.512ZM2 20h1M9 12l4.5 4.5"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgHighlight;
