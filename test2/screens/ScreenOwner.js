import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ScreenA = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>물품 소지자 페이지</Text>
      <Button title="소지품 등록하기" onPress={() => navigation.navigate("ScreenOwnerRegist")} />
      <Button title="뒤로 가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default ScreenA;