import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

const SvgMobile = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 12 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.75}
      y={0.75}
      width={10.5}
      height={16.5}
      rx={2.25}
      stroke="#2F3941"
      strokeWidth={1.5}
    />
    <Path stroke="#2F3941" strokeWidth={1.5} d="M0 13.25h12" />
  </Svg>
);

export default SvgMobile;
