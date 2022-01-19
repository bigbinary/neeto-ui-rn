import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgInput = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#Input_svg__a)">
      <Path
        d="M5 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1m9 12H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1Zm-9 4h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H5h6ZM8 6v12V6Z"
        stroke="#68737D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="Input_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgInput;
