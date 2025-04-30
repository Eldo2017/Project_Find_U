// components/QRScanner.js
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Camera} from 'expo-camera';

const QRScanner=({onScanned})=>{
    const [hasPermission, setPermission]=useState(null);
    
    useEffect(()=>{
        (async()=>{
            const {status}=await Camera.requestCameraPermissionㄴㄴAsync();
            setPermission(status=='granted');
        })();
    }, []);

    if(hasPermission==null) return <Text>카메라 권한 요청 중...</Text>;
    if(hasPermission==false) return <Text>카메라 권한이 없습니다</Text>;

    return (
        <Camera
            style={styles.camera}
            onBarcodeScanned={({data})=>onScanned(data)}
        />
    );
};

const styles=StyleSheet.create({
    camera:{flex:1},
});

export default QRScanner;