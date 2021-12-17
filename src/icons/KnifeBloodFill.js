import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKnifeBloodFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.342 1.408L22.373 19.44a1.5 1.5 0 01-2.121 2.122l-4.596-4.597L12.12 20.5 8 16.38V19a1 1 0 01-2 0v-4a1 1 0 00-1.993-.117L4 15v1a1 1 0 01-2 0V7.214a7.976 7.976 0 012.168-5.627l.174-.179z" />
    </Svg>
  );
}

export default SvgKnifeBloodFill;
