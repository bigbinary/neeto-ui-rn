import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHeavyShowersFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M13 18v5h-2v-5H9v3H7v-3.252a8 8 0 1 1 9.458-10.65A5.5 5.5 0 1 1 17.5 18l-.5.001v3h-2v-3h-2z" />
  </Svg>
);

export default SvgHeavyShowersFill;
