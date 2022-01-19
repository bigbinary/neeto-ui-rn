import * as React from "react";
import Svg, { G, Path, Circle, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgNeetoQuiz = props => (
  <Svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#neeto-quiz_svg__a)">
      <Path
        d="M10.686 9.686A2.18 2.18 0 0 1 12.9 8a2.136 2.136 0 0 1 2.25 2c0 1.504-2.15 2-2.15 3"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.631 17.158a9.014 9.014 0 1 1 2.21 2.21L5 20l.631-2.842Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={12.75} cy={15.75} r={0.75} fill="#fff" />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgNeetoQuiz;
