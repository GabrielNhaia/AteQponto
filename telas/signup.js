//DESENVOLVIDO PELA EQUIPE MAPA DO CRIME - TCC(USC)
import React, { Component, useState} from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native';
import {CadastrarUsuario, Usuariodb} from '../banco/Usuariodb';


export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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
        />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua Senha"
        secureTextEntry={true}
        />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}          
          onPress={() => CadastrarUsuario(name,"11111111111","jhonatan@jhonatan.jhonatan.jhonatan","jhonatan", false)}
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
