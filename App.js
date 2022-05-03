//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './telas/Signup';
import Login from './telas/Login';
import TelaCentral from './telas/TelaCentral';


class App extends Component {
  render() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
              name='Login'
              component={Login}
              options={{
                headerTransparent:true,
                headerShown:false,
              }}
            />
            <Stack.Screen
              name='Signup'
              component={Signup}
              options={{
                headerTransparent:true,
                headerShown:false,
              }}
            />
            <Stack.Screen
              name='TelaCentral'
              component={TelaCentral}
              options={{
                headerTransparent:true,
                headerShown:false,
              }}
            />            
          </Stack.Navigator>
        </NavigationContainer>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cbf2d6',
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#0c0f0d',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',

  },
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    width: '45%',
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',

  }
});

export default App;
