import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import QRScanner from "../components/QRScanner";
import ItemInfo from "../components/ItemInfo"; //스캔 후 정보 표시용 컴포넌트트

const ScreenB2 = ({ navigation }) => {
  const [scannedId, setScannedId]=useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>분실물 등록 페이지</Text>
      {!scannedId?(
        <QRScanner onScanned={setScannedId}/>
      ):(
        <ItemInfo itemId={scannedId}/>
      )}
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

export default ScreenB2;