import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLink = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m17.717 12.36 1.73-1.73a4.27 4.27 0 1 0-6.038-6.039l-3.398 3.36a4.268 4.268 0 0 0-.002 6.036l.002.002L10 14c.345.338.745.614 1.183.817"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.806 9.193c.438.203.839.48 1.183.818a4.268 4.268 0 0 1 .002 6.036l-.002.002-3.18 3.219A4.27 4.27 0 0 1 4.77 13.23L6.5 11.5"
      stroke="#323232"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgLink;
