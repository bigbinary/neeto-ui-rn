import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLock = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 21H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 9V7a4 4 0 0 0-4-4 3.992 3.992 0 0 0-3.866 3.023M11.997 14.5c-.275 0-.5.225-.497.5 0 .275.225.5.5.5s.5-.225.5-.5-.225-.5-.503-.5Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgLock;
