import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

class Login extends Component {
render() {
    return (
  
      <View style={styles.container}>
      
  
        <StatusBar
          backgroundColor="#B0C4DE"
          barStyle="light-content"
        />

        <Image style={{height:170, width:320, bottom: 25, borderRadius:12}} source={require("../assets/ATEQPONTO_logo.png")} />

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
            onPress={() => this.props.navigation.navigate('Signup')}
          >
            <Text style={styles.btnTxt}>Registrar-se</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate('TelaCentral')}
          >
            <Text style={styles.btnTxt}>Login</Text>
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
      backgroundColor: '#B0C4DE',
    },
    titulo: {
      fontSize: 30,
      textAlign: 'center',
      margin: 10,
      color: '#0c0f0d',
    },
    input: {
      width: '90%',
      borderRadius:12,
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
      top:5,
      padding: 15,
      borderRadius:15,
      width: '45%',
    },
    btnTxt: {
      fontSize: 18,
      textAlign: 'center',
      color: '#fff',
  
    }
  });
  
  export default Login;