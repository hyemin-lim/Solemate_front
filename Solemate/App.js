/* eslint-disable */
import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, PermissionsAndroid, ToastAndroid} from 'react-native';
import LogBoxButton from 'react-native/Libraries/LogBox/UI/LogBoxButton';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './views/Login';
import SignUpScreen from './views/SignUp';
import MakeUserProfileScreen from './views/MakeUserProfile';
import MainNavigation from './views/MainNavigation';


function FindIDScreen({navigation}) {
    return (
        <View>
            <Text>
                find ID page
            </Text>
        </View>
    )
}
function FindPWScreen({navigation}) {
    return (
        <View>
            <Text>
                find PW page
            </Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();

const requestLocationPermission = async () => {
    try{
        const backLocGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
            {
                title: "Background Location Permission",
                message: "사용자의 백그라운드 위치에 액세스합니다.",
                buttonNeutral: "나중에 하기",
                buttonNegative: "허용하지 않음",
                buttonPositive: "허용"
            }
        );

        if(backLocGranted){
            console.log("위치 접근 권한이 허용되었습니다.");
        }
        else{
            console.log("위치 접근 권한 비허용.");
            ToastAndroid.show("사용자 위치 접근 권한 비허용으로 인해 일부 기능이 제한될 수 있습니다.", ToastAndroid.LONG);
        }
    } catch(error){
        console.warn(error);
    }
}

export default class App extends React.Component {
  render() {
      const granted = requestLocationPermission();
      return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName="LogIn" screenOptions={{headerShown: false}}>
                  <Stack.Screen name="LogIn" component={LoginScreen} />
                  <Stack.Screen name="SignUp" component={SignUpScreen} />
                  <Stack.Screen name="MakeUserProfile" component={MakeUserProfileScreen} />
                  <Stack.Screen name="FindID" component={FindIDScreen} />
                  <Stack.Screen name="FindPW" component={FindPWScreen} />
                  <Stack.Screen name="MainNavigation" component={MainNavigation} />
              </Stack.Navigator>
          </NavigationContainer>
      );

  }
}

