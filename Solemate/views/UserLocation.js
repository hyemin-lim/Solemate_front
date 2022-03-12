import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import Geolocation from 'react-native-geolocation-service';

const CurrentPosition = () => {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });

    useEffect(()=> {
        Geolocation.getCurrentPosition(
            position => {
                const {latitude, longitude} = position.coords;
                setLocation({
                    latitude: latitude,
                    longitude: longitude,
                });
            },
            error => {
                console.log(error.code, error.message);
            },
            {enableHighAccuracy:true, timeout:15000, maximumAge:10000},
        );
    }, []);
    console.log(location.longitude, location.latitude);
    return (
        {
            lat: location.latitude,
            lng: location.longitude,
        }
    );
}

export default CurrentPosition;
