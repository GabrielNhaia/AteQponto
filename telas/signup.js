//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import {CadastrarUsuario} from '../banco/Usuariodb'
export default class Signup extends Component {
  render(){

    return (
      <View name="Registrar" style={styles.container}>
      <StatusBar
        backgroundColor="#2d742d"
        barStyle="light-content"
        />
      <Text style={styles.titulo}>Registrar - se</Text>
      <TextInput
        style={styles.input}
        name = "Email"
        placeholder="Email"
        />
      <TextInput
        style={styles.input}
        name = "Nome"
        placeholder="Nome completo"
        />
      <TextInput
        style={styles.input}
        name = "CPF"
        placeholder="CPF"
        />
      <TextInput
        style={styles.input}
        name = "Senha"
        placeholder="Senha"
        secureTextEntry
      />
      {/*
      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha"
        secureTextEntry
        />
    */} 
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}          
          onPress={() => this.props.navigation.navigate('Login')}
          onPressOut={ CadastrarUsuario( this.Nome.value, this.CPF.value, this.Email.value, this.Senha.value, true)}
          >
          <Text style={styles.btnTxt}>Registre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    borderRadius: 12,
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
    top: 5,
    padding: 15,
    borderRadius: 15,
    width: '100%',
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  }
  
});
