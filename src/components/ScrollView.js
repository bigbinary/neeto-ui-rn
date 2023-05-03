import styled from "styled-components/native";
import { flexbox, space, border, color, layout } from "styled-system";

export const ScrollView = styled.ScrollView.attrs(() => ({
  keyboardShouldPersistTaps: "handled",
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
}))`
  ${flexbox}
  ${space}
  ${border}
  ${color}
  ${layout}
`;
