import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDeleteBin2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 6V3a1 1 0 011-1h8a1 1 0 011 1v3h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5zm6.414 8l1.768-1.768-1.414-1.414L12 12.586l-1.768-1.768-1.414 1.414L10.586 14l-1.768 1.768 1.414 1.414L12 15.414l1.768 1.768 1.414-1.414L13.414 14zM9 4v2h6V4H9z" />
    </Svg>
  );
}

export default SvgDeleteBin2Fill;
