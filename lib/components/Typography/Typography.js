import styled from "styled-components/native";
import { space, layout, typography, color, textStyle } from "styled-system";

export const Typography = styled.Text`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${textStyle}
`;

Typography.defaultProps = {
  color: "font.primary",
};

// Typography.propTypes = {
//   fontSize: PropTypes.string,
//   color: PropTypes.string,
// };
