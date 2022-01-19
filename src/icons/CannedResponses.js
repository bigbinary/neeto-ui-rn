import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCannedResponses = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 22H4V8h12V6H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2Zm10-8.586 6-6V12h2V4h-8v2h4.586l-6 6L22 13.414ZM13.495 30l-1.6-1.2L17 22h7v-6h2v6a2.002 2.002 0 0 1-2 2h-6l-4.505 6Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgCannedResponses;
