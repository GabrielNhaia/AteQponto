//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './telas/Signup';
import Login from './telas/Login';
import TelaCentral from './telas/TelaCentral';
import Perfil from './telas/Perfil';
import Notificacao from './telas/Notificacao';
import Feedback from './telas/Feedback';
import FeedbackNew from './telas/FeedbackNew';
import BuscarFeedback from './telas/BuscarFeedback';

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
            <Stack.Screen
              name='FeedbackNew'
              component={FeedbackNew}
              options={{
                headerTransparent:true,
                headerShown:false,
              }}
            />          
            <Stack.Screen
              name='BuscarFeedback'
              component={BuscarFeedback}
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
