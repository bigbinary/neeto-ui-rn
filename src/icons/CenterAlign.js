import * as React from "react";
import Svg, { G, Rect, Mask, Path, Defs, ClipPath } from "react-native-svg";

const SvgCenterAlign = props => (
  <Svg
    width={18}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#CenterAlign_svg__a)">
      <Rect
        x={3}
        y={11.334}
        width={11.571}
        height={3.857}
        rx={1}
        fill="#68737D"
      />
      <Mask id="CenterAlign_svg__b" fill="#fff">
        <Rect x={4.5} y={6.19} width={9} height={3.857} rx={1} />
      </Mask>
      <Rect
        x={4.5}
        y={6.19}
        width={9}
        height={3.857}
        rx={1}
        stroke="#68737D"
        strokeWidth={3}
        mask="url(#CenterAlign_svg__b)"
      />
      <Path stroke="#68737D" strokeWidth={1.5} d="M9 9.619v7.5M9 2.869v3.75" />
    </G>
    <Defs>
      <ClipPath id="CenterAlign_svg__a">
        <Path fill="#fff" transform="translate(0 .62)" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgCenterAlign;
