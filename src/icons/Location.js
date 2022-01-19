import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLocation = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M13.512 8.76a2.139 2.139 0 1 1-3.024 3.024 2.139 2.139 0 0 1 3.024-3.025Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19 10a6.404 6.404 0 0 1-2.305 4.921L14.4 16.834a6.41 6.41 0 0 0-1.976 2.895L12 21l-.424-1.271A6.405 6.405 0 0 0 9.6 16.834l-2.296-1.913A6.406 6.406 0 0 1 5 10v.036c0-4.368 3.617-6.902 7-6.902s7 2.534 7 6.902"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgLocation;
