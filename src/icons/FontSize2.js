import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFontSize2(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 6v15H8V6H2V4h14v2h-6zm8 8v7h-2v-7h-3v-2h8v2h-3z" />
    </Svg>
  );
}

export default SvgFontSize2;
