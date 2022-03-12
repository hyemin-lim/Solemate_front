import React, {useState} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    FlatList,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import CurrentPosition from './UserLocation';

function WeatherInfo() {
    const {lat, lng} = CurrentPosition();
    return(
        <View>
            <Text>lat: {lat}</Text>
            <Text>lng: {lng}</Text>
        </View>
    )
}

export default WeatherInfo;
