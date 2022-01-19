import * as React from "react";
import Svg, { Mask, Rect } from "react-native-svg";

const SvgMenuLayout = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Mask id="MenuLayout_svg__a" fill="#fff">
      <Rect x={4} y={4} width={6} height={6} rx={1} />
    </Mask>
    <Rect
      x={4}
      y={4}
      width={6}
      height={6}
      rx={1}
      stroke="#68737D"
      strokeWidth={3}
      mask="url(#MenuLayout_svg__a)"
    />
    <Mask id="MenuLayout_svg__b" fill="#fff">
      <Rect x={4} y={14} width={6} height={6} rx={1} />
    </Mask>
    <Rect
      x={4}
      y={14}
      width={6}
      height={6}
      rx={1}
      stroke="#68737D"
      strokeWidth={3}
      mask="url(#MenuLayout_svg__b)"
    />
    <Mask id="MenuLayout_svg__c" fill="#fff">
      <Rect x={14} y={4} width={6} height={6} rx={1} />
    </Mask>
    <Rect
      x={14}
      y={4}
      width={6}
      height={6}
      rx={1}
      stroke="#68737D"
      strokeWidth={3}
      mask="url(#MenuLayout_svg__c)"
    />
    <Mask id="MenuLayout_svg__d" fill="#fff">
      <Rect x={14} y={14} width={6} height={6} rx={1} />
    </Mask>
    <Rect
      x={14}
      y={14}
      width={6}
      height={6}
      rx={1}
      stroke="#68737D"
      strokeWidth={3}
      mask="url(#MenuLayout_svg__d)"
    />
  </Svg>
);

export default SvgMenuLayout;
