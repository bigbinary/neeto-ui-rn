import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSpeakerFill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm8 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
  </Svg>
);

export default SvgSpeakerFill;
