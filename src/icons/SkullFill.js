import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkullFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 18v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3H3a1 1 0 01-1-1v-5C2 6.477 6.477 2 12 2s10 4.477 10 10v5a1 1 0 01-1 1h-3zM7.5 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgSkullFill;
