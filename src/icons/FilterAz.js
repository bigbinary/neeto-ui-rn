import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgFilterAz = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.395 14.5h4.211l-4.211 5h4.211M21 9.5l-2.5-5-2.5 5M16.419 8.662h4.162M12 19.5H3M12 14.5H3M12 9.5H3M12 4.5H3"
      stroke="#49545C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgFilterAz;
