import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';

export default function Notificacao({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.bloco}>
          
            </View>
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
      justifyContent: 'flex-end',
      backgroundColor: '#2d742d',
    },
    bloco:{
      backgroundColor:'#fff',   
      marginBottom: 20,
      width: 50,
      height:50,
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