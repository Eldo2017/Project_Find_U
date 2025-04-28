import React,{useEffect, useState} from "react";
import { View, Text } from "react-native";
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

const MapComponent=()=>{
    const [location, setLocation]=useState(null);

    useEffect(()=>{
        (async()=>{
            let {status}=await Location.requestForegroundPermissionAsync();
            if(status != 'granted') {return;}
            let loc = await Location.getCurrentPositionAsync({});
            setLocation(loc.coords);
        })();
    },[]);

    if(!location) {return <text>위치 정보를 가져오는 중...</text>;}

    return (
        <MapView 
        style={{width:'100%',height: 200}}
        initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
        >
        
        <Marker
        coordinate={{latitude: location.latitude, longitude: location.longitude}}
        title="나의 위치"
        />
        </MapView>
    );
};

export default MapComponent;