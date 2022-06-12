import { View, StyleSheet, TouchableOpacity, Text, Animated, PanResponder, Image } from 'react-native';

export default function Perfil({ navigation }) {

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

        <View style={{ backgroundColor: '#fff', height: '30%', width: '90%' }}>
          <Text style={styles.textos}> Nome do usuario:</Text>
          <Text style={styles.textos}> CPF:</Text>
          <Text style={styles.textos}> Data de Nascimento:</Text>
          <Text style={styles.textos}> E-mail:</Text>
        </View>
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
    justifyContent: 'flex-start',
    backgroundColor: '#2d742d',
  },
  contemTela: {
    minHeight: '68%',
    alignItems: 'center',
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
  titulo: {
    fontSize: 35,
    color: '#ffF',
  },
  textos: {
    fontSize: 18,
    paddingBottom: 8,
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