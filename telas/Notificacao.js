import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Notificacao({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={{ fontSize: 25 }}>Notificações❗</Text>
      </View>
      <View style={styles.conteudo}>
        <Text style={{ fontSize: 20 }}>  Exemplo de conteudo</Text>
      </View>
      <View style={styles.conteudo}>
      </View>
      <View style={styles.conteudo}>
      </View>
      <View style={styles.conteudo}>
      </View>
      <View style={{ width: "100%", minHeight: '10%', alignItems: 'center', }}>
        <TouchableOpacity
          style={styles.userBtnOption}
          onPress={() => navigation.navigate('TelaCentral')
          }>
          <Text style={styles.btnTxt}>Retornar🚪</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#2d742d',
  },
  conteudo: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 20,
    marginBottom: "2%",
    width: "95%",
    height: "18%",
  },
  titulo: {
    backgroundColor: '#fff',
    alignItems:'center',
    borderRadius: 10,
    marginBottom: "7%",
    width: "75%",
    height: "6%",
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
});