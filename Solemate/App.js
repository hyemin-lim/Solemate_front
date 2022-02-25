/* eslint-disable */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import LogBoxButton from 'react-native/Libraries/LogBox/UI/LogBoxButton';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({navigation}) {

    const [ID, onChangeID] = useState('');
    const [PW, onChangePW] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.logoView}>
                <Image
                    style={styles.logo}
                    source={require('./icon/tiny_logo.png')}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput name="ID" style={styles.input} onChangeText={onChangeID} placeholder="아이디" value={ID}/>
                <TextInput name="PW" style={styles.input} onChangeText={onChangePW} placeholder="비밀번호" value={PW} secureTextEntry={true}/>
                <View style={styles.optionsView}>
                    <TouchableOpacity
                        title="SignUp"
                        onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text>회원가입</Text>
                    </TouchableOpacity>
                    <Text style={{marginStart: 5, marginEnd: 5}}>/</Text>
                    <TouchableOpacity
                        title="FindID"
                        onPress={() => navigation.navigate('FindID')}
                    >
                        <Text>아이디 찾기</Text>
                    </TouchableOpacity>
                    <Text style={{marginStart: 5, marginEnd: 5}}>/</Text>
                    <TouchableOpacity
                        title="FindPW"
                        onPress={() => navigation.navigate('FindPW')}
                    >
                        <Text>비밀번호 찾기</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.buttonView}>
                <View style={styles.optionsView}>
                    <TouchableOpacity>
                        <Image
                            style={{width:50, height:50, marginStart: 10, marginEnd: 10}}
                            source={require('./icon/outline_account_circle_black_24dp.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width:50, height:50, marginStart: 10, marginEnd: 10}}
                            source={require('./icon/outline_account_circle_black_24dp.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width:50, height:50, marginStart: 10, marginEnd: 10}}
                            source={require('./icon/outline_account_circle_black_24dp.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{marginTop:'5%'}}>SNS 계정으로 로그인하기</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Test', {
                    ID: ID,
                    PW: PW
                })}>
                    <Text>로그인</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

function SignUpScreen({navigation}) {
    return (
        <View>
            <Text>
                sign up page
            </Text>
        </View>
    )
}

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

function TestScreen({route, navigation}) {
    const {ID, PW} = route.params;
    return (
        <View>
            <Text>
                test
                ID: {JSON.stringify(ID)}
                PW: {JSON.stringify(PW)}
            </Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LogIn" screenOptions={{headerShown: false}}>
                <Stack.Screen name="LogIn" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="FindID" component={FindIDScreen} />
                <Stack.Screen name="FindPW" component={FindPWScreen} />
                <Stack.Screen name="Test" component={TestScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    logoView: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    logo:{
        width: '60%',
        height: '50%',
    },
    inputView:{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        marginTop: 5,
        marginBottom: 5,
        marginStart: 5,
        marginEnd: 5,
        paddingLeft:15,
        width: '80%',
        height: '20%',
        borderRadius:50,
        borderColor: '#de421d',
        borderWidth:2
    },
    optionsView:{
        flexDirection: 'row'
    },
    buttonView:{
        flex: 3,
        alignItems: 'center',

    },
    button:{
        backgroundColor:'#52b5d1',
        borderRadius: 5000,
        width: '35%',
        height: '15%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
