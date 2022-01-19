import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHourGlass = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M15 19h2v2h-2v-2Zm0 4h2v2h-2v-2Z" fill="#68737D" />
    <Path
      d="M23 11.67V4h3V2H6v2h3v7.67a2 2 0 0 0 .4 1.2L11.75 16 9.4 19.13a2 2 0 0 0-.4 1.2V28H6v2h20v-2h-3v-7.67a2 2 0 0 0-.4-1.2L20.25 16l2.35-3.13a2 2 0 0 0 .4-1.2ZM21 4v7H11V4h10Zm0 16.33V28H11v-7.67L14.25 16 12 13h8l-2.25 3L21 20.33Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgHourGlass;
