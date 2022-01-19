import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgChatNotification = props => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 22H4V8h12V6H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2Zm1.495 8-1.6-1.2L17 22h7v-6h2v6a2.002 2.002 0 0 1-2 2h-6l-4.505 6ZM23 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgChatNotification;
