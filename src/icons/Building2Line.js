import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBuilding2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 19V5.7a1 1 0 01.658-.94l9.671-3.516a.5.5 0 01.671.47v4.953l6.316 2.105a1 1 0 01.684.949V19h2v2H1v-2h2zm2 0h7V3.855L5 6.401V19zm14 0v-8.558l-5-1.667V19h5z" />
    </Svg>
  );
}

export default SvgBuilding2Line;
