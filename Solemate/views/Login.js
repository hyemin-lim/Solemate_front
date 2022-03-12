import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
const loginURL = 'http://192.168.0.148:8080/user/login';
const instance = axios.create({
  timeout: 3000,
})

export default function LoginScreen({navigation}) {
  const [ID, onChangeID] = useState('');
  const [PW, onChangePW] = useState('');


  return (
    <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.container} resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false} keyboardShouldPersistTaps="always">
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require('../icon/solemate_logo_02.png')} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          name="ID"
          style={styles.input}
          onChangeText={onChangeID}
          placeholder="아이디"
          value={ID}
        />
        <TextInput
          name="PW"
          style={styles.input}
          onChangeText={onChangePW}
          placeholder="비밀번호"
          value={PW}
          secureTextEntry={true}
        />
        <View style={styles.optionsView}>
          <TouchableOpacity
            title="SignUp"
            onPress={() => navigation.navigate('SignUp')}>
            <Text>회원가입</Text>
          </TouchableOpacity>
          <Text style={{marginStart: 5, marginEnd: 5}}>/</Text>
          <TouchableOpacity
            title="FindID"
            onPress={() => navigation.navigate('FindID')}>
            <Text>아이디 찾기</Text>
          </TouchableOpacity>
          <Text style={{marginStart: 5, marginEnd: 5}}>/</Text>
          <TouchableOpacity
            title="FindPW"
            onPress={() => navigation.navigate('FindPW')}>
            <Text>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <View style={styles.optionsView}>
          <TouchableOpacity>
            <Image
              style={{width: 50, height: 50, marginStart: 10, marginEnd: 10}}
              source={require('../icon/outline_account_circle_black_24dp.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 50, height: 50, marginStart: 10, marginEnd: 10}}
              source={require('../icon/outline_account_circle_black_24dp.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 50, height: 50, marginStart: 10, marginEnd: 10}}
              source={require('../icon/outline_account_circle_black_24dp.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={{marginTop:5}}>SNS 계정으로 로그인하기</Text>
        <View style={styles.buttonView}>
          <TouchableOpacity
              style={styles.button}
              onPress={
                async () => {
                try{
                  console.log("try");
                  const {data} = await instance.post(
                      loginURL, {
                        userId: ID,
                        userPassword: PW,
                      },
                  );
                  console.log(data);
                  if(data === ''){
                    console.log('null check');
                    return ;
                  }
                  navigation.navigate('MainNavigation', {screen: 'Home', params: {ID: ID, PW: PW}});
                } catch (error){
                  console.log(error);
                  ToastAndroid.show("아이디와 비밀번호를 확인하세요!", ToastAndroid.SHORT);
                  return ;
                }

              }

              }
          >
            <Text style={{color: '#FFFFFF'}}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  logoView: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 250,
    height: 150,
  },
  inputView: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    marginStart: 5,
    marginEnd: 5,
    paddingLeft: 15,
    width: 300,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#de421d',
    borderWidth: 2,
  },
  optionsView: {
    height:60,
    flexDirection: 'row',
  },
  buttonView: {
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#52b5d1',
    borderRadius: 5000,
    width: 150,
    height: 45,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
