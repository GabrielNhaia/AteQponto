import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import {BuscarFeedbacks} from '../banco/Usuariodb';

export default function BuscarFeedback({navigation, route}) {
    console.log(BuscarFeedbacks);

    return (
        <View style={styles.container}>
            <View style={{ width: "100%", minHeight: '10%', alignItems: 'center', }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => navigation.navigate('TelaCentral')
              }>
              <Text style={styles.btnTxt}>Sair🚪</Text>
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
});