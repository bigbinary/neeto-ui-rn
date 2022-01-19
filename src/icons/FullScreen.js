import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgFullScreen = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#FullScreen_svg__a)">
      <Path
        d="M14.77 4.463h4.927l.001 4.927M9.39 18.537H4.465l-.001-4.927M19.698 13.61v4.926l-4.928.001M4.463 9.39V4.465l4.927-.001"
        stroke="#68737D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path fill="#68737D" d="M8.65 8.65h7.6v5.7h-7.6z" />
    </G>
    <Defs>
      <ClipPath id="FullScreen_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgFullScreen;
