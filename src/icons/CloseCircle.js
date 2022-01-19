import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCloseCircle = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM9 9l6 6M9 15l6-6"
      stroke="#F56A58"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCloseCircle;
