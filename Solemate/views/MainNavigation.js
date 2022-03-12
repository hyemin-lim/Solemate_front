import React, {useState} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';

function ChatScreen({route, navigation}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}

function WalkRouteScreen({route, navigation}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}

function WalkPostScreen({route, navigation}){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}

function MyPageScreen({route, navigation}){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    )
}

function MainNavigation({route, navigation}){
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if(route.name === 'Home'){
                    iconName = focused ? 'home' : 'home-outline';
                } else if(route.name === 'Chat'){
                    iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                } else if (route.name === 'WalkRoute'){
                    iconName = focused ? 'map' : 'map-outline';
                } else if (route.name === 'WalkPost'){
                    iconName = focused ? 'journal' : 'journal-outline';
                } else if (route.name === 'MyPage'){
                    iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ed7522',
            tabBarInactiveTintColor: 'gray'
        })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="WalkRoute" component={WalkRouteScreen} />
            <Tab.Screen name="WalkPost" component={WalkPostScreen} />
            <Tab.Screen name="MyPage" component={MyPageScreen} />
        </Tab.Navigator>
    )
}

export default MainNavigation;
