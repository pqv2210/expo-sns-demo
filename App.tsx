import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ButtonFaceBook } from "./app/components/button-facebook";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ButtonFaceBook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
