//Components/LocationTracker.js
import React, {useEffect, useState} from 'react'
import {Text} from 'react-native'
import * as location from 'expo-location';

const LocationTracker=({itemId, finderId})=>{
    useEffect(() => {
        (async()=>{
            const {status}=await location.requestForegroundPermissionAsync();
            if(status!='granted') return;

            const loc = await location.getCurrentPositionAsync({});
            const body={
                itemId,
                finder: finderId,
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude
            };

            fetch('http://your-server.com/api/locations',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
        })();
    },[]);

    return <Text>위치 전송 중...</Text>;
};  

const styles = StyleSheet.create({
    container:{padding:16},
});

export default LocationTracker;