import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMarkupLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 10.5l1.038-3.635a1 1 0 011.924 0L14 10.5V12h.72a1 1 0 01.97.757l1.361 5.447a8 8 0 10-10.102 0l1.362-5.447A1 1 0 019.28 12H10v-1.5zm2 9.5a7.952 7.952 0 003.265-.694L13.938 14h-3.876l-1.327 5.306A7.95 7.95 0 0012 20zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgMarkupLine;
