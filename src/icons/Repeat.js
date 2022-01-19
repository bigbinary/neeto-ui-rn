import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRepeat = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m16.545 2 3.637 3.636-3.637 3.637"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.818 11.09V9.274a3.636 3.636 0 0 1 3.637-3.637h12.727M7.455 22l-3.637-3.636 3.637-3.637"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.182 12.91v1.817a3.636 3.636 0 0 1-3.637 3.637H3.818"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgRepeat;
