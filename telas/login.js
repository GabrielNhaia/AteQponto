import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, } from 'react-native';

class login extends Component {
render() {
    return (
  
      <View style={styles.container}>
      
  
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
  
  export default login;