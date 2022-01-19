import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgInbox = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17 17H7m5-14v8m0 0 3-3m-3 3L9 8m12 4v5c0 2.2-1.8 4-4 4H7l-.01-.001c-2.21-.01-4-1.8-4-4.01v-5"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgInbox;
