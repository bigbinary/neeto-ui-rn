import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCustomize = props => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM23 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 25a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#68737D"
    />
    <Path
      d="M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3 14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2Zm8.11 22.31A11.932 11.932 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-6.33-4.82l-1.12.31A2.82 2.82 0 0 1 4 16 12 12 0 0 1 16.47 4 12.18 12.18 0 0 1 28 15.53a11.891 11.891 0 0 1-3.35 8.79v-.01Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgCustomize;
