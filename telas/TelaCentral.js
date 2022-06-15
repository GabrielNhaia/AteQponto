<<<<<<< HEAD
import { Component, React, useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default function TelaCentral() {

  const [selectedLanguage, setSelectedLanguage] = useState();
  const [isVisible, setisVisible] = useState(false);
  const [ver, setver] = useState(false);
  const [isChecked, setisChecked] = useState(true);

  return (
    <View style={{width: "100%", height: "100%"}}>
        <MapView
          style={{width: "100%", height: "100%"}}
          initialRegion={{
            latitude: -25.481162102936597, 
            longitude: -49.29087692187499,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      <View style={styles.perfTam}>
       
      </View>

      <View style={{ height: 200, width: 200 }}>
        <Modal
          //Modal de opções
          animationType='slide'
          visible={ver}
        >
          <Image style={{ height: 200, width: 100, bottom: 25, top: 25, left: "37%", borderRadius: 12 }} source={require("../assets/pinhao.png")} />
=======
import React, { Component, useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Image,  } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker, PROVIDER_GOOGLE, } from 'react-native-maps';


export default function TelaCentral({ navigation }) {

  const [periodo, setperiodo] = useState("Mensal");
  const [isVisible, setisVisible] = useState(false);
  const [ver, setver] = useState(false);
  const [isChecked, setisChecked] = useState(true);
  const [horas, sethoras] = useState("09");
  const [minutos, setminutos] = useState("30");

  return (
    <View style={styles.container}>

      {/* Botão de perfil*/}
      <View style={{ left: "35%", top: "-25%"}} >
        <TouchableOpacity
          style={{ height: 70, width: 70 }}
          onPress={() => navigation.navigate('Perfil')
          }>
          <Image style={{ maxWidth: 70, maxHeight: 70, borderRadius: 15, }} source={require("../assets/Menu.png")} />
        </TouchableOpacity>
      </View>


      {/* Modais */}
      <View style={{ height: 200, width: 200 }}>

        {/* Modal de opções*/}
        <Modal
          animationType='slide'
          transparent={false}
          visible={ver}
        >
          {/*
          <Image style={{ height: 200, width: 100, bottom: 25, top: 25, left: "37%", borderRadius: 12 }} source={require("../assets/pinhao.png")} />
           */}

          <View style={{ maxWidth: "100%", minHeight: '10%', alignItems: 'center', top: 25, marginTop: '70%' }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setisVisible(true)
              }}>
              <Text style={styles.btnTxt}>Filtros🌪</Text>
            </TouchableOpacity>
          </View>
          <View style={{ maxWidth: "100%", minHeight: '10%', alignItems: 'center', top: 25 }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setver(false)
              }}
              onPressOut={() => navigation.navigate('Notificacao')
              }>
              <Text style={styles.btnTxt}>Notificações❗</Text>
            </TouchableOpacity>
          </View>
          <View style={{ maxWidth: "100%", minHeight: '10%', alignItems: 'center', top: 25 }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setver(false)
              }}
              onPressOut={() => navigation.navigate('Feedback')
              }>
              <Text style={styles.btnTxt}>Feedback😀</Text>
            </TouchableOpacity>
          </View>
          <View style={{ maxWidth: "100%", minHeight: '10%', alignItems: 'center', top: 25 }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setver(false), setisVisible(false)
              }}
              onPressOut={() => navigation.navigate('Login')}
              >
              <Text style={styles.btnTxt}>Sair🚪</Text>
            </TouchableOpacity>
          </View>

          {/*View picker*/}
          <View style={{ flex: 1, flexDirection: 'row', left: '1%', width: '97%', maxHeight: 60, marginTop: '8%', paddingLeft: '10%', backgroundColor: '#2d742d', borderRadius: 20 }} >
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
            </Picker>
          </View>
>>>>>>> main

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

<<<<<<< HEAD
=======
        {/* Modal de filtro*/}
>>>>>>> main
        <Modal
          //Modal de filtro
          transparent={true}
          animationType='slide'
          visible={isVisible}
        >
          <View style={styles.umColText}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Filtrar perigo:</Text>
<<<<<<< HEAD
          </View>
          <View style={styles.colText}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Filtrar Por periodo:</Text>
=======
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <CheckBox
                style={{ maxWidth: 40, left: 20, top: "2%" }}
                onClick={() => {
                  setisChecked(!isChecked)
                }}
                checkedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao.png")} />}
                unCheckedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao_black.png")} />}
                isChecked={isChecked}
              />
              <CheckBox
                style={{ maxWidth: 40, paddingLeft: 60, top: "2%" }}
                onClick={() => {
                  setisChecked(!isChecked)
                }}
                checkedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao.png")} />}
                unCheckedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao_black.png")} />}
                isChecked={isChecked}
              />
              <CheckBox
                style={{ maxWidth: 40, paddingLeft: 60, top: "2%" }}
                onClick={() => {
                  setisChecked(!isChecked)
                }}
                checkedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao.png")} />}
                unCheckedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao_black.png")} />}
                isChecked={isChecked}
              />
              <CheckBox
                style={{ maxWidth: 40, paddingLeft: 60, top: "2%" }}
                onClick={() => {
                  setisChecked(!isChecked)
                }}
                checkedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao.png")} />}
                unCheckedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao_black.png")} />}
                isChecked={isChecked}
              />
              <CheckBox
                style={{ maxWidth: 40, paddingLeft: 60, top: "2%" }}
                onClick={() => {
                  setisChecked(!isChecked)
                }}
                checkedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao.png")} />}
                unCheckedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao_black.png")} />}
                isChecked={isChecked}
              />
            </View>
          </View>
          <View style={styles.colText}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Filtrar Por periodo:</Text>
            {/*picker do periodo*/}
            <Picker
              style={styles.picker}
              selectedValue={periodo}
              onValueChange={(itemValue) =>
                setperiodo(itemValue)
              }>
              <Picker.Item label="Semanal" value="Semanal" />
              <Picker.Item label="Mensal" value="Mensal" />
              <Picker.Item label="Semestral" value="Semestral" />
            </Picker>
>>>>>>> main
          </View>
          <View style={styles.colText}>
            <Text style={{ fontSize: 20, color: "#fff" }}>Mostrar pontos?</Text>
            <CheckBox
              style={{ padding: 10 }}
              onClick={() => {
                setisChecked(!isChecked)
              }}
<<<<<<< HEAD
=======
              checkedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao.png")} />}
              unCheckedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao_black.png")} />}
>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< Updated upstream
=======

      {/* 
      */}
=======

>>>>>>> main
                {/*     MAPA   */}
        <View style={styles.mapaView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            enableZoomControl={true}
            showsUserLocation = {true}
            showsMyLocationButton = {true}
            zoomEnabled = {true}
<<<<<<< HEAD
            style={{ width: "100%", height: "100%" }}
=======
            style={styles.mapaView}
>>>>>>> main
            initialRegion={{
              latitude: -25.481162102936597,
              longitude: -49.29087692187499,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
              <MapView.Marker
                coordinate={{
                latitude:  -25.495929967534504, 
                longitude: -49.302469015104435
              }}
                title={"Faculdades Santa Cruz"}
                description={"Novo Mundo, Curitiba - State of Paraná, 81050-290"}
              />
		          <MapView.Marker
                coordinate={{
                latitude:-25.494362882244992, 
                longitude:-49.29910549458465   
              }}
                title={"Rua João Bonat, 432"}
                description={"Novo Mundo, Curitiba - State of Paraná, 81050-170"}
              />
		          <MapView.Marker
                coordinate={{
                latitude:-25.492991453744153, 
                longitude:-49.29829236295225 
              }}
                title={"Rua Paulina Ader, 836"}
                description={"Novo Mundo, Curitiba - State of Paraná, 81050-250"}
              />

		          <MapView.Marker
                coordinate={{
                latitude:-25.490131141066176, 
                longitude:-49.28912598367627   
              }}
                title={"Rua Maria Trevisan Tortato, 160"}
                description={"Novo Mundo, Curitiba - State of Paraná, 81020-000"}
              />

	          	<MapView.Marker
                coordinate={{
                latitude:-25.432762860035012,   
                longitude:-49.37380626359049 
              }}
                title={"Br 277 - Km 100 (Sent. Ctba)"}
                description={"Riviera, Curitiba - State of Paraná, 81295-000"}
                />
<<<<<<< HEAD
              </MapView>
        </View>

>>>>>>> Stashed changes
=======
                <MapView.Marker
                coordinate={{
                latitude: -25.4858110779203, 
                longitude: -49.29227254323616
              }}
                title={"Avenida Brasília, 4554"}
                description={"Novo Mundo, Curitiba - State of Paraná, 80610-270"}
              />
              <MapView.Marker
                coordinate={{
                latitude: -25.488939507613317, 
                longitude: -49.29295691959209
              }}
                title={"Travessa Augusto Marach, 199"}
                description={"Novo Mundo, Curitiba - State of Paraná, 81020-220"}
              />
              <MapView.Marker
                coordinate={{
                latitude: -25.489068851854775, 
                longitude: -49.29552031339611
              }}
                title={"Rua Pedro Zagonel, 136"}
                description={"Novo Mundo, Curitiba - State of Paraná, 81050-001"}
              />
              <MapView.Marker
                coordinate={{
                latitude: -25.495722604003934, 
                longitude: -49.30238184648217 
              }}
              />
              </MapView>
        </View>
>>>>>>> main
      <View style={styles.Opcoes} >

        {/* botão para abrir modal de opções */}
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setver(true)
          }}>
          <Text style={styles.btnTxt}>Opções</Text>
        </TouchableOpacity>

<<<<<<< HEAD
        <Text style={styles.Hora}>
          HH:MM
=======
        <Text style={styles.Hora} >
          {horas}:{minutos}
>>>>>>> main
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
<<<<<<< HEAD
    height: '8%',
    position: 'absolute',
    bottom: 0,
=======
    height: '100%',
    position: 'absolute',
>>>>>>> main
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  perfTam: {
    height: 25,
    width: 25,
<<<<<<< HEAD
    top: -500,
    left: "28%",
    zIndex: 1,
    borderRadius: 30,
  },
=======
    zIndex: 1,
    borderRadius: 30,
  },
  picker: {
    width: "45%",
    left: "15%",
    color: "#fff"
  },
>>>>>>> main
  retornar: {
    backgroundColor: '#070a08',
    left: 2,
    padding: 15,
    borderRadius: 15,
    width: '99%',
  },
<<<<<<< HEAD
=======
  userBtnOption: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
  },
>>>>>>> main
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '35%',
  },
  image: {
    justifyContent: 'flex-start',
<<<<<<< HEAD
    marginBottom: 700,
=======
    zIndex: -1,
>>>>>>> main
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
<<<<<<< HEAD
    backgroundColor: '#8FBC8F',
=======
    backgroundColor: '#2d742d',
>>>>>>> main
  },
  colText: {
    flex: 1,
    maxHeight: 80,
    width: "97%",
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
<<<<<<< HEAD
    backgroundColor: '#8FBC8F',
=======
    backgroundColor: '#2d742d',
>>>>>>> main
  },
  modal: {
    width: '50%',
    height: '50%',
    position: 'relative',
    bottom: 0,
    justifyContent: 'center',
  },
  Opcoes: {
<<<<<<< HEAD
    backgroundColor: '#8FBC8F',
=======
    backgroundColor: '#2d742d',
>>>>>>> main
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
  },
  mapaView: {
    width: "100%", 
    height: "100%",
    position:'absolute', 
    zIndex:-2
  }
});
<<<<<<< HEAD

=======
>>>>>>> main
//export default TelaCentral;