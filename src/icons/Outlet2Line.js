import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOutlet2Line = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v4h-2V7zm3 5h2v4h-2v-4zm-6 0h2v4H8v-4z" />
  </Svg>
);

export default SvgOutlet2Line;
