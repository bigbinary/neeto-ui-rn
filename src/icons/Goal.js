import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgGoal = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#Goal_svg__a)" fill="#68737D">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.541 13.488a6.083 6.083 0 1 1-2.557-2.79l-1.058 1.142a4.583 4.583 0 1 0 2.475 2.878l1.14-1.23Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.723 7.278A9.872 9.872 0 0 0 16 6.083c-5.477 0-9.917 4.44-9.917 9.917 0 5.477 4.44 9.917 9.917 9.917 5.476 0 9.916-4.44 9.916-9.917a9.878 9.878 0 0 0-.969-4.281l1.116-1.116A11.367 11.367 0 0 1 27.417 16c0 6.305-5.111 11.417-11.416 11.417-6.306 0-11.417-5.112-11.417-11.417S9.695 4.583 16.001 4.583c2.126 0 4.117.582 5.822 1.595l-1.1 1.1Z"
      />
      <Path d="m26.976 8.475-2.783-.36-.359-2.782-3.007 3.007v2.02l-1.39 1.39-1.572 1.572-1.121 1.008a2.002 2.002 0 0 0-2.603 1.122 2.002 2.002 0 0 0 1.122 2.603 2.002 2.002 0 0 0 2.603-1.122c.179-.493.179-1.032 0-1.48l1.121-1.01 2.334-2.333.628-.628h2.02l3.007-3.007Z" />
    </G>
    <Defs>
      <ClipPath id="Goal_svg__a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgGoal;
