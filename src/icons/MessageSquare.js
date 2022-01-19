import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMessageSquare = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20 14.667a1.778 1.778 0 0 1-1.778 1.777H7.556L4 20V5.778A1.778 1.778 0 0 1 5.778 4h12.444A1.778 1.778 0 0 1 20 5.778v8.889Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMessageSquare;
