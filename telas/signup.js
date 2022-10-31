//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, { Component, useState} from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import {CadastrarUsuario, Usuariodb} from '../banco/Usuariodb';


export default function Signup({navigation,route}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");  
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#2d742d"
        barStyle="light-content"
        />
      <Text style={styles.titulo}>Registrar - se</Text>
      <TextInput      
        style={styles.input}        
        placeholder="Email"           
        keyboardType="email-address"         
        onChangeText={(value) => setEmail(value)} 
        />
      <TextInput
        style={styles.input}
        placeholder="Nome completo"        
        onChangeText={(value) => setName(value)} 
        />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        maxLength={11}
        keyboardType="number-pad"
        onChangeText={(value) => setCPF(value)} 
        />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}        
        onChangeText={(value) => setSenha(value)} 
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha"
        secureTextEntry={true}        
        onChangeText={(value) => setSenha2(value)} 
        />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}          
          onPress={() => {
            CadastrarUsuario(name,CPF,email,senha,false), 
            navigation.navigate('Login') }}
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
