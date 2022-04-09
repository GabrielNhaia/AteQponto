//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signup from './telas/signup';
import login from './telas/login';


class App extends Component {
  render() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='login'>
            <Stack.Screen
              name='login'
              component={login}
            />
            <Stack.Screen
              name='signup'
              component={signup}
            />
          </Stack.Navigator>
        </NavigationContainer>
     
    );
  }
}

/*
const App = () => {

  const Stack = createNativeStackNavigator();
  return (

    <View style={styles.container}>
      <NavigationContainer>

        <Stack.Navigator initialRouteName='signup'>
          <Stack.Screen
            name='signup'
            component={signup}
          />
          <Stack.Screen
            name='App'
            component={App}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar
        backgroundColor="#cbf2d6"
        barStyle="light-content"
      />
      <Text style={styles.titulo}>AteQponto</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
          NavigationContainer
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => this.props.navigation.navigate('signup')}
        >
          <Text style={styles.btnTxt}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} */

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
