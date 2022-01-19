import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgImage = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#Image_svg__a)"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m21 16.014-4.293-4.293a.999.999 0 0 0-1.414 0L11 16.014" />
      <Path d="M18 21.014H6a3 3 0 0 1-3-3v-12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3Z" />
      <Path d="m16 21.014-6.293-6.293a.999.999 0 0 0-1.414 0l-4.847 4.847m5.819-10.82a.375.375 0 1 1-.53.531.375.375 0 0 1 .53-.53Z" />
    </G>
    <Defs>
      <ClipPath id="Image_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgImage;
