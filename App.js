//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import signup from './telas/signup';
import login from './telas/login';
//import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

=======
import Signup from './telas/Signup';
import Login from './telas/Login';
import TelaCentral from './telas/TelaCentral';
import Perfil from './telas/Perfil';
import Notificacao from './telas/Notificacao';
import Feedback from './telas/Feedback';
>>>>>>> main

class App extends Component {
  render() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
<<<<<<< HEAD
              name='login'
              component={login}
=======
              name='Login'
              component={Login}
>>>>>>> main
              options={{
                headerTransparent:true,
                headerShown:false,
              }}
            />
            <Stack.Screen
<<<<<<< HEAD
              name='signup'
              component={signup}
=======
              name='Signup'
              component={Signup}
>>>>>>> main
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
            <Stack.Screen
              name='Perfil'
              component={Perfil}
              options={{
                headerTransparent:true,
                headerShown:false,
              }}
            /> 
            <Stack.Screen
              name='Notificacao'
              component={Notificacao}
              options={{
                headerTransparent:true,
                headerShown:false,
              }}
            /> 
            <Stack.Screen
              name='Feedback'
              component={Feedback}
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
    backgroundColor: '#2d742d',
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
