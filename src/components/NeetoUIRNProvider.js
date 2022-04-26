import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { EventEmitter } from "events";
import {
  GestureDetector,
  Gesture,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ProviderContext } from "@contexts";

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
});

export const NeetoUIRNProvider = ({ children }) => {
  const providerEvent = new EventEmitter();
  const emitEvent = eventName => providerEvent.emit(eventName);
  const gesture = Gesture.Tap().onFinalize(() => runOnJS(emitEvent)("pressed"));

  return (
    <SafeAreaProvider>
      <ProviderContext.Provider value={{ providerEvent }}>
        <GestureHandlerRootView style={styles.rootView}>
          <GestureDetector gesture={gesture}>{children}</GestureDetector>
        </GestureHandlerRootView>
      </ProviderContext.Provider>
    </SafeAreaProvider>
  );
};

NeetoUIRNProvider.propTypes = {
  children: PropTypes.node,
};
