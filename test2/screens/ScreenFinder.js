import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ScreenB = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>분실물 발견자 페이지</Text>
      <Button title="분실물 등록하기" onPress={() => navigation.navigate("ScreenFinderRegist")} />
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

export default ScreenB;