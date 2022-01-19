import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgError = props => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM6 6l4 4M6 10l4-4"
      stroke="#F56A58"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgError;
