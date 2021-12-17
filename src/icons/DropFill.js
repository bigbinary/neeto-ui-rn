import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDropFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.636 6.636L12 .272l6.364 6.364a9 9 0 11-12.728 0z" />
    </Svg>
  );
}

export default SvgDropFill;
