import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>분실물 찾기 어플</Text>
      <Button title="물품 소지자" onPress={() => navigation.navigate("ScreenOwner")} />
      <Button title="분실물 발견자" onPress={() => navigation.navigate("ScreenFinder")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: -300,
  },
  button: {
    width: 500,
    height: 200,
    backgroundColor: "#007BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginVertical: 500, 
  },
  buttonText: {
    fontSize: 40,
    color: "#FFF",
    fontWeight: "bold",
  },

});

export default HomeScreen;