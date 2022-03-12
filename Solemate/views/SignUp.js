import React, {useState} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput, ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
const joinURL = 'http://192.168.0.148:8080/user/join';
const instance = axios.create({
    timeout: 3000,
})


function SignUpScreen({navigation}) {
    const [Name, onChangeName] = useState('');
    const [ID, onChangeID] = useState('');
    const [PW, onChangePW] = useState('');
    const [PWcheck, onChangePWcheck] = useState('');
    const join =  async () => {
        if(PW === PWcheck){
            console.log("일치");
            const {data} = await instance.post(joinURL, {
                userName: Name,
                userId: ID,
                userPassword: PW,
            })
                .then(function (response) {
                    console.log(response);
                    navigation.navigate('Login');
                }).catch(function (error) {
                    console.log(error);
                    ToastAndroid.show("오류가 발생했습니다!", ToastAndroid.SHORT);
                    return ;
                })
        }
        else{
            console.log("일치하지 않음");
            ToastAndroid.show("비밀번호 입력이 일치하지 않습니다!", ToastAndroid.SHORT);
            return ;
        }


    };
    return (
        <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.container} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
            <View style={styles.guidelineView}>
                <Text style={styles.guideline}>
                    아이디와 비밀번호를
                </Text>
                <Text style={styles.guideline}>
                    입력하세요
                </Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    name="Name"
                    style={styles.input}
                    onChangeText={onChangeName}
                    placeholder="이름"
                    value={Name}
                ></TextInput>
                <TextInput name="ID"
                           style={styles.input}
                           onChangeText={onChangeID}
                           placeholder="아이디"
                           value={ID}></TextInput>
                <TextInput name="PW"
                           style={styles.input}
                           onChangeText={onChangePW}
                           placeholder="비밀번호"
                           value={PW}
                           secureTextEntry={true}></TextInput>
                <TextInput name="PWcheck"
                           style={styles.input}
                           onChangeText={onChangePWcheck}
                           placeholder="비밀번호 확인"
                           value={PWcheck}
                           secureTextEntry={true}></TextInput>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={join}>
                    <Text>계속하기</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
    },
    guidelineView:{
        height: hp('30%'),
        justifyContent: 'center',
    },
    guideline:{
        fontSize: 25,
        fontWeight: 'bold',
        marginStart: '5%'
    },
    inputView: {
        height: hp('40%'),
        alignItems: 'center',
    },
    input:{
        marginTop: 5,
        marginBottom: 5,
        marginStart: 5,
        marginEnd: 5,
        paddingLeft:15,
        width: '80%',
        height: '20%',
        borderBottomColor: '#de421d',
        borderBottomWidth:2
    },
    buttonView: {
        height:hp('30%'),
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    button:{
        backgroundColor:'#FFFFFF',
        borderRadius: 5,
        borderColor: '#52b5d1',
        borderWidth: 1,
        width: '90%',
        height: '25%',
        marginTop: '5%',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },

});
