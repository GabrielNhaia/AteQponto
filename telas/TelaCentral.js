import { Component, React, useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';

export default function TelaCentral() {

  const [horas, sethoras] = useState("07");
  const [minutos, setminutos] = useState("30");
  const [isVisible, setisVisible] = useState(false);
  const [ver, setver] = useState(false);
  const [isChecked, setisChecked] = useState(true);

  return (
    <View style={styles.container}>

      <View style={styles.perfTam}
        onPress={() => this.props.navigation.navigate('Perfil')}
      >
        <Image style={{ height: 70, width: 70, borderRadius: 40 }} source={require("../assets/perf.png")} />
      </View>

      <View style={{ height: 200, width: 200 }}>
        <Modal
          //Modal de opções
          animationType='slide'
          visible={ver}
        >
          <Image style={{ height: 200, width: 100, bottom: 25, top: 25, left: "37%", borderRadius: 12 }} source={require("../assets/pinhao.png")} />
          <View style={{flex:1, flexDirection:'row'}} >
            {/*picker da hora*/}
            <Picker
              style={styles.picker}
              selectedValue={horas}
              onValueChange={(itemValue) =>
                sethoras(itemValue)
              }>
              <Picker.Item label="01" value="01" />
              <Picker.Item label="02" value="02" />
              <Picker.Item label="03" value="03" />
              <Picker.Item label="04" value="04" />
              <Picker.Item label="05" value="05" />
              <Picker.Item label="06" value="06" />
              <Picker.Item label="07" value="07" />
              <Picker.Item label="08" value="08" />
              <Picker.Item label="09" value="09" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="11" value="11" />
              <Picker.Item label="12" value="12" />
              <Picker.Item label="13" value="13" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="17" value="17" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="19" value="19" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="21" value="21" />
              <Picker.Item label="22" value="22" />
              <Picker.Item label="23" value="23" />
              <Picker.Item label="24" value="24" />
            </Picker>
            {/*picker d0s minutos*/}
            <Picker
              style={styles.picker}
              selectedValue={minutos}
              onValueChange={(itemValue) =>
                setminutos(itemValue)
              }>
              <Picker.Item label="00" value="00" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="30" value="30" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="50" value="50" />
              <Picker.Item label="60" value="60" />
            </Picker>

          </View>

          <View
            style={{ bottom: 8, position: "absolute", width: "100%" }}   >
            <TouchableOpacity
              style={styles.retornar}
              onPress={() => {
                setver(false)
              }}>
              <Text style={styles.btnTxt}>↩Retornar</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          //Modal de filtro
          transparent={true}
          animationType='slide'
          visible={isVisible}
        >
          <View style={styles.umColText}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Filtrar perigo:</Text>
          </View>
          <View style={styles.colText}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Filtrar Por periodo:</Text>
          </View>
          <View style={styles.colText}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Mostrar pontos?</Text>
            <CheckBox
              style={{ padding: 10 }}
              onClick={() => {
                setisChecked(!isChecked)
              }}
              isChecked={isChecked}
              leftText={isChecked ? "Sim 👍" : "Não 👎"}
            />
          </View>
          <View style={{ bottom: 8, position: "absolute", width: "100%" }}>
            <TouchableOpacity
              style={styles.retornar}
              onPress={() => {
                setisVisible(false)
              }}>
              <Text style={styles.btnTxt}>↩Retornar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/MapaPlaceholder.jpg")} />
      </View>

      <View style={styles.Opcoes} >

        {/* botão para abrir modal de opções */}
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setver(true)
          }}>
          <Text style={styles.btnTxt}>Opções</Text>
        </TouchableOpacity>

        <Text style={styles.Hora} >
          {horas}:{minutos}
        </Text>

        {/* botão para abrir modal de filtros */}
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setisVisible(true)
          }}>
          <Text style={styles.btnTxt}>Filtro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  perfTam: {
    height: 25,
    width: 25,
    top: -500,
    left: "28%",
    zIndex: 1,
    borderRadius: 30,
  },
  picker: {
    width:"40%",
    maxWidth: "50%",
    left: "1%"
  },
  retornar: {
    backgroundColor: '#070a08',
    left: 2,
    padding: 15,
    borderRadius: 15,
    width: '99%',
  },
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '35%',
  },
  image: {
    justifyContent: 'flex-start',
    marginBottom: 700,
  },
  umColText: {
    marginTop: "100%",
    flex: 1,
    maxHeight: 80,
    width: "97%",
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#8FBC8F',
  },
  colText: {
    flex: 1,
    maxHeight: 80,
    width: "97%",
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#8FBC8F',
  },
  modal: {
    width: '50%',
    height: '50%',
    position: 'relative',
    bottom: 0,
    justifyContent: 'center',
  },
  Opcoes: {
    backgroundColor: '#8FBC8F',
    borderRadius: 12,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 9,
    flexDirection: "row",
  },
  Hora: {
    color: '#fff',
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingTop: 12
  },
  dialogo: {
    bottom: 0,
    height: '50%',
    width: '50%',
  },
  btnTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  }
});

//export default TelaCentral;