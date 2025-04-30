//components/QRCodeGenerator.js
import React from "react";
import { View } from "react-native";
import QRCode from 'react-native-qrcode-svg';

const QRCodeGenerator=({itemId})=>{
    if(!itemId){
        return <Text>QR 생성 실패: itemId가 없습니다</Text>;
    }
    return (
        <View style={{alignItems: 'center', marginTop: 20}}>
            <QRCode value={itemId.toString()} size={200}/>
        </View>
    );
};

export default QRCodeGenerator;