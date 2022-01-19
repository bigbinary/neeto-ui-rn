import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNotes = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2.25A2.75 2.75 0 0 0 7.25 5v1.25H6A2.75 2.75 0 0 0 3.25 9v10A2.75 2.75 0 0 0 6 21.75h8A2.75 2.75 0 0 0 16.75 19v-1.25H18A2.75 2.75 0 0 0 20.75 15V5A2.75 2.75 0 0 0 18 2.25h-8Zm6.75 14H18c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25h-8c-.69 0-1.25.56-1.25 1.25v1.25H14A2.75 2.75 0 0 1 16.75 9v7.25ZM8 7.75H6c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25H8Zm0 4.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H8Zm0 3a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H8Z"
      fill="#68737D"
    />
  </Svg>
);

export default SvgNotes;
