//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, {component} from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, } from 'react-native';
/*import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { signup } from './telas/signup';*/

const App = () => {
     return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#cbf2d6"
        barStyle="light-content"
      />
      <Text style={styles.titulo}>Registrar - se</Text>
      <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirme sua Senha"
          secureTextEntry
        />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
        >
          <Text style={styles.btnTxt}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
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
    backgroundColor:'#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width: '90%',

  },
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    width: '100%',
  },
  btnTxt:{
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',

  }

});

export default App;