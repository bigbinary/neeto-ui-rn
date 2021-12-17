import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoinsLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 2a8 8 0 013.292 15.293A8 8 0 116.706 6.707 8.003 8.003 0 0114 2zm-4 6a6 6 0 100 12 6 6 0 000-12zm1 1v1h2v2H9a.5.5 0 00-.09.992L9 13h2a2.5 2.5 0 110 5v1H9v-1H7v-2h4a.5.5 0 00.09-.992L11 15H9a2.5 2.5 0 110-5V9h2zm3-5a5.985 5.985 0 00-4.484 2.013 8 8 0 018.47 8.471A6 6 0 0014 4z" />
    </Svg>
  );
}

export default SvgCoinsLine;
