import { View, StyleSheet, TouchableOpacity, Text, Animated, PanResponder, Image } from 'react-native';
import Login from './Login';
import TelaCentral from './TelaCentral';

export default function Perfil({ navigation, route}) {

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

  const [userName, setuserName] = ("TelaCentral.userName");
  console.log(TelaCentral.name)

  return (
    <View style={styles.container}>

      <View style={styles.contemTitulo}>
        <Text style={styles.titulo}>Perfil</Text>
      </View>

      <View style={styles.contemTela}>
        <View style={{ paddingBottom: 25, }}>
          {/* Imagem do perfil */}
          <Animated.View
            style={{
              transform: [{ translateX: pan.x }, { translateY: pan.y }]
            }}
            {...panResponder.panHandlers}
          >
            <Image style={styles.imgPerf} source={require("../assets/perf.png")} />
          </Animated.View>
        </View>

        <View style={styles.contemTexto}>
          <View style={{alignItems:'center', }}>
            <Text style={styles.titulo1}> Dados do usuario</Text>
          </View>
          <Text style={styles.textos}> Nome do usuario: {userName} {route.params?.paramKey} </Text>
          <Text style={styles.textos}> CPF: </Text> 
          <Text style={styles.textos}> Data de Nascimento:</Text>
          <Text style={styles.textos}> E-mail:</Text>
        </View>
      </View>

      <View style={{bottom:25}}>
        {/* Botão alterar dados */}
        <View style={{ width: "100%", Height: '10%', alignItems: 'center', paddingBottom: 10 }}>
          <TouchableOpacity
            style={styles.userBtnOption}
            onPress={() => navigation.navigate('Login')
            }>
            <Text style={styles.btnTxt}>🌱Alterar Dados🎲</Text>
          </TouchableOpacity>
        </View>
        {/* Botão retornar */}
        {/* <View style={{ width: "100%", Height: '10%', alignItems: 'center', }}>
          <TouchableOpacity
            style={styles.userBtnOption}
            onPress={() => navigation.navigate('TelaCentral')
            }>
            <Text style={styles.btnTxt}>Retornar🚪</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#2d742d',
  },
  contemTela: {
    minHeight: '20%',
    alignItems: 'center',
  },
  contemTexto: {
    backgroundColor: '#318c46',
    height: '50%',
    width: '90%',
    borderRadius: 10,
  },
  contemTitulo: {
    minHeight: '12%',
    alignItems: 'center',
    marginTop: 5,
  },
  imgPerf: {
    height: 150,
    width: 160,
    borderRadius: 30
  },
  titulo1: {
    fontSize: 30,
    color: '#ffF',
  },
  titulo: {
    fontSize: 35,
    color: '#ffF',
  },
  textos: {
    fontSize: 18,
    paddingBottom: 8,
    color: '#fff',
  },
  userBtnOption: {
    backgroundColor: '#070a08',
    // padding: 15,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    paddingTop: 12,
    height: 45,
  },
});