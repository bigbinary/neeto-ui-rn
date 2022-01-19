import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSettings = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.8 3a1 1 0 0 1 .941.662l.508 1.415c.08.223.237.41.442.528l1.507.87a1 1 0 0 0 .677.118l1.48-.267a1 1 0 0 1 1.045.484l.8 1.38a1 1 0 0 1-.1 1.146l-.97 1.148a1 1 0 0 0-.238.646v1.74a1 1 0 0 0 .237.646l.971 1.148a1 1 0 0 1 .1 1.146l-.8 1.38a1 1 0 0 1-1.044.484l-1.48-.267a1 1 0 0 0-.677.118l-1.507.87a1.006 1.006 0 0 0-.442.528l-.508 1.415A1 1 0 0 1 12.8 21h-1.6a1 1 0 0 1-.94-.662l-.509-1.415a1.01 1.01 0 0 0-.44-.528l-1.509-.87a1 1 0 0 0-.677-.118l-1.48.267A1 1 0 0 1 4.6 17.19l-.8-1.38a1 1 0 0 1 .1-1.146l.971-1.148a1 1 0 0 0 .237-.646v-1.74a1 1 0 0 0-.237-.646l-.96-1.148a1 1 0 0 1-.1-1.146l.8-1.38a1 1 0 0 1 1.043-.484l1.48.267a1 1 0 0 0 .677-.118l1.508-.87c.204-.119.36-.306.441-.528l.508-1.415A1 1 0 0 1 11.2 3h1.6Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 14.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSettings;
