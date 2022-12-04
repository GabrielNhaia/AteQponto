import React, { Component, useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Animated, PanResponder, Image } from 'react-native';
import { LoginUsuario } from '../banco/Usuariodb';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['deprecated-react-native-prop-types'])

export default function Login({ navigation, route }) {


  const [userName, setUserName] = useState("");
  const [nome, setnome] = useState("");
  // const nome = "false";

  const [cpf, setCPF] = useState("");
  const [senha, setSenha] = useState("");

  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: pan.x, dy: pan.y }
    ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    }
  });


  return (

    <View style={styles.container}>
      <StatusBar
        backgroundColor="#2d742d"
        barStyle="light-content"
      />
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <Image style={styles.logo} source={require("../assets/bussao.png")} />
      </Animated.View>

      <TextInput
        value={cpf}
        onChangeText={(cpf) => setCPF(cpf)}
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor={"#a8a7a7"}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setSenha(value)}
        placeholder="Senha"
        placeholderTextColor={"#a8a7a7"}
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.btnTxt}>Registrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          style={styles.userBtn}
          onPress={async () => {
            var entrou = false;            
            // var username = "name";
            entrou = await LoginUsuario(cpf, senha, nome)
            // console.log(entrou);
            // setUsername(username);
            setnome(nome);
            setUserName(nome);
            if (entrou) {
              navigation.navigate('TelaCentral',
              { paramKey: userName, }),
              // console.log({userName});
              console.log({nome});
              console.log("Login Sucesso");
            }
            else {
              navigation.navigate('Login')
              console.log("Login falha");

            }
          }}
          // onPressOut={ () => {setUserName(name);}}
        >
          <Text style={styles.btnTxt}>Login</Text>
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
  logo: {
    height: 300,
    width: 320,
    bottom: 25,
    borderRadius: 12
  },
  userBtn: {
    backgroundColor: '#070a08',
    top: 5,
    padding: 15,
    borderRadius: 15,
    width: '45%',
  },
  btnTxt: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  }
});
