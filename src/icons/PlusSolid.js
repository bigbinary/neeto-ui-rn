import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPlusSolid = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
      fill="#68737D"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.833 6.75a.75.75 0 0 0-1.5 0v4.583H6.75a.75.75 0 0 0 0 1.5h4.583v4.584a.75.75 0 0 0 1.5 0v-4.584h4.584a.75.75 0 0 0 0-1.5h-4.584V6.75Z"
      fill="#F8F9F9"
    />
  </Svg>
);

export default SvgPlusSolid;
