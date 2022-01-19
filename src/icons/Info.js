import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInfo = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.009 11.249h1.15v4.25M11 15.499h2.31M12.1 8.246a.25.25 0 1 1-.25-.25"
      stroke="#276EF1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.85 7.996a.25.25 0 0 1 .25.25"
      stroke="#276EF1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 2.999H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-8a5 5 0 0 0-5-5Z"
      stroke="#276EF1"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgInfo;
