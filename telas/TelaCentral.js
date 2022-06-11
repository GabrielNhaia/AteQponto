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
<<<<<<< Updated upstream
=======

      {/* 
      */}
                {/*     MAPA   */}
        <View style={styles.mapaView}>
          <MapView
            provider={PROVIDER_GOOGLE}
            enableZoomControl={true}
            showsUserLocation = {true}
            showsMyLocationButton = {true}
            zoomEnabled = {true}
            style={{ width: "100%", height: "100%" }}
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
              </MapView>
        </View>

>>>>>>> Stashed changes
      <View style={styles.Opcoes} >

        {/* botão para abrir modal de opções */}
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setver(true)
          }}>
          <Text style={styles.btnTxt}>Opções</Text>
        </TouchableOpacity>

        <Text style={styles.Hora}>
          HH:MM
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
  },
  mapaView: {
    width: "100%", 
    height: "100%",
    position:'absolute', 
    zIndex:-2
  }
});

//export default TelaCentral;