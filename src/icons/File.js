import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const SvgFile = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={4.75}
      y={2.75}
      width={14.5}
      height={18.5}
      rx={3.25}
      stroke="#68737D"
      strokeWidth={1.5}
    />
    <Rect
      x={14.75}
      y={2.75}
      width={4.5}
      height={5.5}
      rx={1.25}
      fill="#68737D"
      stroke="#68737D"
      strokeWidth={1.5}
    />
  </Svg>
);

export default SvgFile;
