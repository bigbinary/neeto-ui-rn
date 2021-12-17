import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChromeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.827 21.763C5.35 20.771 2 16.777 2 12c0-1.822.487-3.53 1.339-5.002l4.283 7.419a4.999 4.999 0 004.976 2.548l-2.77 4.798zM12 22l4.287-7.425A4.977 4.977 0 0017 12a4.978 4.978 0 00-1-3h5.542A9.98 9.98 0 0122 12c0 5.523-4.477 10-10 10zm2.572-8.455a2.999 2.999 0 01-5.17-.045l-.029-.05a3 3 0 115.225.05l-.026.045zm-9.94-8.306A9.974 9.974 0 0112 2a9.996 9.996 0 018.662 5H12a5.001 5.001 0 00-4.599 3.035L4.632 5.239z" />
    </Svg>
  );
}

export default SvgChromeFill;
