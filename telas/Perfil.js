import { View, StyleSheet, TouchableOpacity, Text, Animated, PanResponder, Image } from 'react-native';

export default function Perfil({ navigation }) {
  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: this.pan.x, dy: this.pan.y }
    ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(this.pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateX: this.pan.x }, { translateY: this.pan.y }]
        }}
        {...this.panResponder.panHandlers}
      >
        <Image style={styles.logo} source={require("../assets/bussao.png")} />
      </Animated.View>


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
  logo: {
    height: 300,
    width: 320,
    bottom: 25,
    borderRadius: 12
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