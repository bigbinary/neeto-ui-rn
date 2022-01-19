import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChatUploadLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385 5.763 17H20V5H4v13.385zM13 11v4h-2v-4H8l4-4 4 4h-3z" />
  </Svg>
);

export default SvgChatUploadLine;
