import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUpload = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 17V3m9 14a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4M17 8.001 11.999 3l-5 5.001"
      stroke="#68737D"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgUpload;
