import React from "react";
import { View, StyleSheet } from "react-native";
import AppNavigator from "../Navi/AppNavigator";
import CloudBackground from "../components/CloudBackground";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Background com nuvens */}
      <CloudBackground />
      
      {/* Conteúdo principal */}
      <View style={styles.overlay}>
        <AppNavigator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  overlay: {
    flex: 1,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Garante que fique acima do background
  },
});