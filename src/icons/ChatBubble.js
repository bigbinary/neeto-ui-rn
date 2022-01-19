import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChatBubble = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.74 30 16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84l-3.42 6Z"
      fill="#68737D"
    />
    <Path d="M8 10h16v2H8v-2Zm0 6h10v2H8v-2Z" fill="#68737D" />
  </Svg>
);

export default SvgChatBubble;
