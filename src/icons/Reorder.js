import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgReorder = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m14 6-2-2-2 2M10 18l2 2 2-2"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      d="M5.75 9.25h12.722M5.75 12.25h12.722M5.75 15.25h12.722"
    />
  </Svg>
);

export default SvgReorder;
