import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSearch = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.193 5.582a5.97 5.97 0 1 1-8.444 8.444 5.97 5.97 0 0 1 8.444-8.444M14.15 14.06l4.44 4.44"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSearch;
