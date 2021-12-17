import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRoadsterFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 13.5V21a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-7.5l-1.243-.31A1 1 0 010 12.22v-.72a.5.5 0 01.5-.5h1.875l2.138-5.702A2 2 0 016.386 4h11.228a2 2 0 011.873 1.298L21.625 11H23.5a.5.5 0 01.5.5v.72a1 1 0 01-.757.97L22 13.5zM4 15v2a1 1 0 001 1h3.245a.5.5 0 00.44-.736C7.88 15.754 6.318 15 4 15zm16 0c-2.317 0-3.879.755-4.686 2.264a.5.5 0 00.441.736H19a1 1 0 001-1v-2zM6 6l-1.561 4.684A1 1 0 005.387 12h13.226a1 1 0 00.948-1.316L18 6H6z" />
    </Svg>
  );
}

export default SvgRoadsterFill;
