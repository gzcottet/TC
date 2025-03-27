import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default function CloudBackground() {
  return (
    <View style={styles.container}>
      {/* Nuvem 1 */}
      <Image
        source={require("../assets/images/nuvem.png")}
        style={[styles.cloud, styles.cloud1]}
        resizeMode="contain"
      />
      
      {/* Nuvem 2 */}
      <Image
        source={require("../assets/images/nuvem.png")}
        style={[styles.cloud, styles.cloud2]}
        resizeMode="contain"
      />
      
      {/* Nuvem 3 */}
      <Image
        source={require("../assets/images/nuvem.png")}
        style={[styles.cloud, styles.cloud3]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0, // Valor menor que o overlay
  },
  cloud: {
    position: "absolute",
    width: 200,
    height: 130,
    opacity: 0.8,
  },
  cloud1: {
    top: "30%", 
    left: "-10%",
  },
  cloud2: {
    top: "10%",
    right: "-15%",
  },
  cloud3: {
    top: "31%", 
    left: "30%",
  },
});