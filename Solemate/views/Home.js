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
import {styles as baseStyle} from '../styles/styles';
import WeatherInfo from './WeatherInfo';

const matchedDogData = [
    {
        id: '1',
        name: '쪼푸',
        age: 6,
        sex: 'male'
    },
    {
        id: '2',
        name: '쪼푸',
        age: 6,
        sex: 'male'
    },
    {
        id: '3',
        name: '쪼푸',
        age: 6,
        sex: 'male'
    },
    {
        id: '4',
        name: '쪼푸',
        age: 6,
        sex: 'male'
    },
    {
        id: '5',
        name: '쪼푸',
        age: 6,
        sex: 'male'
    },
]

const DogItem = ({item, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <ImageBackground style={styles.matchedDogPicture} source={require('../icon/solemate_app_icon.png')}>
                <View>
                    <Text>
                        {item.name}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
};
const WalkRouteItem = ({item, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Image style={styles.walkRoutePicture} source={require('../icon/solemate_logo_02.png')} />
        </TouchableOpacity>
    )
};

function HomeScreen({route, navigation}){

    const renderDogItem = ({item}) => {
        return (
            <DogItem
                item={item}
                onPress={() => console.log("dog " + item.id.toString() + " selected")}
            />
        )
    };
    const renderWalkRouteItem = ({item}) => {
        return (
            <WalkRouteItem
                item={item}
                onPress={() => console.log("walk route selected")}
            />
        )
    }

    return (

        <View style={baseStyle.container}>
            <View style={styles.guidelineView}>
                <Text style={styles.guideline}>{route.params.ID}의 산책메이트</Text>
                <Text style={styles.guideline}>매칭 결과입니다</Text>
            </View>
            <SafeAreaView>
                <FlatList
                    style={styles.matchedDogView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={matchedDogData}
                    renderItem={renderDogItem}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
            <View style={styles.guidelineView2}>
                <Text style={styles.guideline}>산책 코스 추천</Text>
            </View>
            <SafeAreaView>
                <FlatList
                    style={styles.walkRouteView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={matchedDogData}
                    renderItem={renderWalkRouteItem}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
            <View style={styles.guidelineView2}>
                <Text style={styles.guideline}>오늘의 산책 지수</Text>
            </View>
            <View style={styles.weatherView}>
                <View style={styles.weatherBoard}>
                    <Text style={styles.guideline}>날씨 정보</Text>
                    <WeatherInfo></WeatherInfo>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    guidelineView:{
        height: '15%',
        width: '100%',
        justifyContent: 'center',
    },
    guidelineView2:{
        height: '10%',
        width: '100%',
        justifyContent: 'center',
    },
    guideline:{
        fontSize: 25,
        fontWeight: 'bold',
        marginStart: '10%'
    },
    matchedDogView:{
        height: '25%',
        marginStart: 5,
        marginEnd:5,
    },
    matchedDogPicture:{
        width: 100,
        height: '100%',
        borderRadius: 20,
        marginStart: 5,
        marginEnd: 5,
    },
    walkRouteView:{
        height: '10%',
        marginStart: 5,
        marginEnd:5,
    },
    walkRoutePicture:{
        width: 250,
        height: '100%',
        borderRadius: 20,
        marginStart: 5,
        marginEnd: 5,
        justifyContent: 'center',
    },
    weatherView:{
        height: '30%',
        width: '100%',
        alignItems:'center'
    },
    weatherBoard:{
        height:'90%',
        width:'80%',
        backgroundColor:'tomato',
        borderRadius: 20,
        justifyContent:'center',
    }
});



export default HomeScreen;
