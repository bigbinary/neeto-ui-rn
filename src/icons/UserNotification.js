import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUserNotification = props => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M26 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7v5ZM12 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0-2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgUserNotification;
