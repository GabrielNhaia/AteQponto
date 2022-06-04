import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Feedback({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.tela}>
        <View>
          <Text style={styles.titulo}>Feedback do Ponto</Text>
        </View>
        <View style={{ flex: 2, alignItems: 'flex-start', flexDirection: 'column' }}>
          <View>
          <Text style={styles.ponto}>Ponto:</Text>
          </View>
          <View style={styles.aoLado}>
            <Text style={styles.ponto}>Horario:</Text>
            <Text style={styles.ponto}>Data:</Text>
          </View>
          <View>
            <Text style={styles.ponto}>Acontecimento:</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "100%", minHeight: '10%', alignItems: 'center', alignSelf: 'flex-end', justifyContent: 'center', }}>
        <TouchableOpacity
          style={styles.userBtnOption}
          onPress={() => navigation.navigate('TelaCentral')
          }>
          <Text style={styles.btnTxt}>Enviar Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtnOption}
          onPress={() => navigation.navigate('TelaCentral')
          }>
          <Text style={styles.btnTxt}>Cancelar</Text>
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
  tela: {
    height: '77%',
    width: '100%',
    backgroundColor: '#f20',
  },
  aoLado: {
    maxHeight: '10%',
    flex: 1,
    flexDirection: 'row',
  },

  userBtnOption: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '35%',
  },
  btnTxt: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },

  titulo: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
  },

  ponto: {
    fontSize: 25,
    color: '#fff',
    marginLeft: 5,
  },
}
);
