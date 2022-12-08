import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import {BuscarFeedbacks} from '../banco/Usuariodb';
import React, { Component, useState } from 'react';
import TelaCentral from './TelaCentral';


export default function BuscarFeedback({navigation, route}) {
  
  const [NomePonto, setNomePonto] = useState('UniSantaCruz');
  var exibirBusca = BuscarFeedbacks(NomePonto);

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", minHeight: '10%', alignItems: 'center', }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => navigation.navigate('TelaCentral')
              }>
              <Text style={styles.btnTxt}>Sair🚪</Text>
            </TouchableOpacity>
            <Text style={styles.btnTxt2}>variavel {route.params?.pontoNome} , {TelaCentral.pontoNome} </Text>
                  <TouchableOpacity
                      style={styles.userBtn}
                      onPress={() => {console.log({exibirBusca}),
                      setNomePonto(route.params?.pontoNome);
                      var Feedbacks  =  BuscarFeedbacks(NomePonto);
                      Feedbacks.forEach((Feedback)=> {console.log(Feedback);} );  
                      // console.log({Feedbacks})  
                      // console.log({perigoso})                
                    }                      
                    }
                  >
                    <Text style={{color:"#fff"}}>ok {NomePonto} {route.params?.pontoNome}</Text>
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
    userBtnOption: {
      backgroundColor: '#070a08',
      padding: 15,
      borderRadius: 15,
      width: '95%',
      alignItems: 'center',
    },
    userBtn: {
      backgroundColor: '#070a08',
      padding: 15,
      borderRadius: 15,
      width: '35%',
    },
    btnTxt: {
      fontSize: 14,
      textAlign: 'center',
      color: '#fff',
    },
    btnTxt2: {
      fontSize: 24,
      textAlign: 'center',
      color: '#070a08',
      margin:25,
    },
});