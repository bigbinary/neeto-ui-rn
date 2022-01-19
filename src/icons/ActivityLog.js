import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgActivityLog = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M28 30H4a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2ZM4 22v6h24v-6H4Z"
      fill="#68737D"
    />
    <Path
      d="M7 26a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 11.586l-2-2V6h-2v4.414L17.586 13 19 11.586Z"
      fill="#68737D"
    />
    <Path
      d="M16 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Zm0-14a6 6 0 1 0 6 6 6.007 6.007 0 0 0-6-6Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgActivityLog;
