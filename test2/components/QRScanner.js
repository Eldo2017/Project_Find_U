// components/QRScanner.js
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera}from 'react-native-vision-camera';

const QRScanner=()=>{
    const [scannedData, setScannedData]=useState('');
    
    const onBarcodeRead = (e)=>{
        setScannedData(e.data);
    };

    return (
        <View style={styles.container}>
            <RNCamera
            style={styles.camera}
            onBarcodeRead={onBarcodeRead}
            captureAudio={false}
            />
            <Text>Scanned: {scannedData}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{flex:1},
    camera:{flex:1},
});

export default QRScanner;