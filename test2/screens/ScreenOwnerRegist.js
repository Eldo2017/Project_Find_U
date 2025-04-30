import React,{useEffect,useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import QRCodeGenerator from "../components/QRCodeGenerator"; //생성기기

const ScreenA2 = ({ navigation }) => {
  const [itemId,setItemId]=useState(null);
  const [name, setName]=useState("");
  const [location,setLocation]=useState("");
  const [phone, setPhone]=useState("");

  const registerItem = async()=>{
    if(!name || !location || !phone){
      Alert.alert("모든 항목을 입력하시오.");
      return;
    }

    try{
      const response = await fetch("http://172.100.6.204:8081/api/items",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: name, location: location, phone: phone}),
      });

      const text = await response.text(); //
        console.log("서버 응답 원문: ",text);

      // 응답 상태 확인 (2xx 외 에러 방지지)
      if (!response.ok){
        Alert.alert("서버 오류",text);
        return;
      }
      let data;
      try{
        data=JSON.parse(text); //파싱 시도
      } catch(parseErr){
        Alert.alert("JSON 파싱 오류","서버에서 잘못된 응답을 받았습니다\n"+text);
        return;
      }
      
      //itemId 확인
      if(!data.itemId){
        Alert.alert("응답에 itemId 없습니다",JSON.stringify(data));
        return;
      }
      
      setItemId(data.itemId); //itemId = 서버에서 생성된 고유값
    } catch(err){
      Alert.alert("네트워크 오류 발생",err.message);
    }
  };

  return (
    <View style={styles.container}>
      {!itemId ? (
      <>
        <Text style={styles.title}>소지품 등록하기</Text>
        <TextInput
          placeholder="물품명"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput 
          placeholder="분실위치"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />
        <TextInput
          placeholder="연락처"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        <Button title="QR 생성하기" onPress={registerItem}/>
        <Button title="뒤로 가기" onPress={() => navigation.goBack()}/>
      </>
    ):(
      <>
        <Text style={styles.text}>QR 생성 완료</Text>
        <QRCodeGenerator itemId={itemId}/>
      </>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  input: {
    borderWidth: 1,
    width: "100%",
    marginBottom: 10,
    padding: 8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16
  },
  text: {
    fontSize: 18,
    marginVertical: 20
  },
});

export default ScreenA2;