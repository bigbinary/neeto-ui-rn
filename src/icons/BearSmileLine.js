import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBearSmileLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.5 2a4.5 4.5 0 012.951 7.897A8.99 8.99 0 0121 13 9 9 0 113.55 9.897a4.5 4.5 0 116.791-5.744 9.05 9.05 0 013.32 0A4.494 4.494 0 0117.5 2zm0 2c-.823 0-1.575.4-2.038 1.052l-.095.144-.718 1.176-1.355-.253a7.05 7.05 0 00-2.267-.052l-.316.052-1.356.255-.72-1.176A2.5 2.5 0 104.73 8.265l.131.123 1.041.904-.475 1.295A7 7 0 1019 13c0-.716-.107-1.416-.314-2.083l-.112-.33-.475-1.295 1.04-.904A2.5 2.5 0 0017.5 4zM10 13a2 2 0 104 0h2a4 4 0 11-8 0h2z" />
    </Svg>
  );
}

export default SvgBearSmileLine;
