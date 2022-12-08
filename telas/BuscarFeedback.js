import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import {BuscarFeedbacks} from '../banco/Usuariodb';
//import TelaCentral from './TelaCentral';
import React, {useState} from 'react';

var exibirBusca = BuscarFeedbacks();

// const [NomePonto, setNomePonto] = useState('UniSantaCruz');

export default function BuscarFeedback({navigation, route}) {

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", minHeight: '10%', alignItems: 'center', }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => navigation.navigate('TelaCentral')
              }>
              <Text style={styles.btnTxt}>Sair🚪</Text>
            </TouchableOpacity>
                  <TouchableOpacity
                      style={styles.userBtn}
                      //onPress={() => console.log({exibirBusca})}
                      // setNomePonto(route.params?.paramKey)}
                  >
                    <Text>ok</Text>
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
      margin: 20,
    },
    userBtn: {
      backgroundColor: '#070a08',
      padding: 15,
      borderRadius: 15,
      width: '35%',
      margin: 20,
    },
    btnTxt: {
      fontSize: 14,
      textAlign: 'center',
      color: '#fff',
    },
});