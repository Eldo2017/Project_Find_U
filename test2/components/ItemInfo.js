//components/ItemInfo.js
import React, {useEffect, useState} from "react";
import {View,Text} from 'react-native';
import { ActivityIndicator } from "react-native-web";

const ItemInfo=({itemId})=>{
    const [item, setItem]=useState(null);

    useEffect(()=>{
        if(itemId){
            fetch(`http://your-server.com/api/items/${itemId}`)
            .then(res=>res.json())
            .then(data=>setItem(data))
            .catch(err=>console.error(err));
        }
    }, [itemId]);

    if(!item) return <ActivityIndicator size="large"/>;

    return (
        <View>
            <Text>물품명: {item.name}</Text>
            <Text>습득위치: {item.location}</Text>
            <Text>소유자: {item.owner_name}</Text>
            <Text>연락처: {item.phone}</Text>
        </View>
    );
};

export default ItemInfo;