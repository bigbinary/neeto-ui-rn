import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const SvgCheckboxInactive = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={1.25}
      stroke="#68737D"
      strokeWidth={1.5}
    />
  </Svg>
);

export default SvgCheckboxInactive;
