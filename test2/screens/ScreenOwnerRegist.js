import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ScreenA2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>소지품 등록 페이지</Text>
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
  },
});

export default ScreenA2;