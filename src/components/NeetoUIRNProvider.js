import * as React from "react";
import PropTypes from "prop-types";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const NeetoUIRNProvider = ({ children }) => (
  <SafeAreaProvider>{children}</SafeAreaProvider>
);

NeetoUIRNProvider.propTypes = {
  children: PropTypes.node,
};
