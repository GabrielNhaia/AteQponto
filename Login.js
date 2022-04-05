import React from 'react';
import {Text, ImageBackground, ScrollView, View, Dimensions } from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
        <ScrollView
            style={{flex: 1, backgroundColor: '#ffffff'}}
            showsVerticalScrollIndicator={false}>
            {/* Brand View */}
            <ImageBackground source={require('./images/background.jpg')}>
                source={require('./images/backgroundImage.jpg')}
                style={{
                    height: Dimensions.get('window').height / 2.5,
                }}
                <View style={styles.brandView}>
                    <Icon 
                        name='location-sharp' 
                        style={{color: '#ffffff', fontSize: 100}}
                    />
                    <Text style={styles.brandViewText}>AteQPonto</Text>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};

export default LoginScreen;

const styles= StyleSheet.create({
    brandView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandViewText:{
        color:'#ffffff',
        fontSize:40,
        fontWeight:'bold',
        textTransform:'uppercase',

    }, 
});