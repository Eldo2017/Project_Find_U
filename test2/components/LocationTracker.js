//Components/LocationTracker.js
import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Geolocation from '@react-native-geolocation-service'

const LocationTracker=()=>{
    const [location, setLocation] = useState(null);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            pos => {
                const crd=pos.coords;
                setLocation(crd);
            },
            err=>console.warn(err.message),
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
        );
    },[]);

    return (
        <View style = {styles.container}>
            {location ? (
                <Text>위도: {location.latitude}, 경도: {location.longitude}</Text>
            ) : (
                <Text>위치 정보를 가져오고 있습니다.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{padding:16},
});

export default LocationTracker;