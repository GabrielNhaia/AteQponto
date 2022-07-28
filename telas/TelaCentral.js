import React, { Component, useState } from 'react';
import { Modal, StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker, PROVIDER_GOOGLE, } from 'react-native-maps';


export default function TelaCentral({ navigation, route }) {

  const [periodo, setperiodo] = useState("Mensal");
  const [isVisible, setisVisible] = useState(false);
  const [ver, setver] = useState(false);
  const [ponto, setponto] = useState(false);
  const [pontoNome, setPontoNome] = useState('Uni Santa Cruz');
  const [pontoEndereco, setPontoEndereco] = useState('Uni Santa Cruz');
  const [isblue, setisblue] = useState('blue');
  const [isgreen, setisgreen] = useState('green');
  const [isyellow, setisyellow] = useState('yellow');
  const [isorange, setisorange] = useState('orange');
  const [isred, setisred] = useState('red');
  const [isChecked, setisChecked] = useState(true);
  const [horas, sethoras] = useState("09");
  const [minutos, setminutos] = useState("30");
  const [perigo, setPerigo] = useState(0);
  const [userName, setUserName] = useState("");


  return (


    <View style={styles.container}>

      {/* Olá, usuario */}
      <View style={{ left: "35%", top: "-25%" }} >
        <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
          <Text style={{ fontSize: 15 }}>Ola, {route.params.paramKey}</Text>
        </View>
      </View>
      {/* Botão de perfil */}
      <View style={{ left: "35%", top: "-25%" }} >
        <TouchableOpacity
          style={{ height: 70, width: 70 }}
          onPress={() => navigation.navigate('Perfil', { route })
          }>
          <Image style={{ maxWidth: 70, maxHeight: 70, borderRadius: 15, }} source={require("../assets/perf.png")} />
        </TouchableOpacity>
      </View>


      {/* Modais */}
      <View style={{ height: 200, width: 200 }}>
        {/* Modal de opções*/}
        <Modal
          animationType='slide'
          transparent={true}
          visible={ver}
        >
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
            {/* Botão Filtros */}
            <View style={styles.colButton}>
              <TouchableOpacity
                style={styles.userBtnOption}
                onPress={() => {
                  setisVisible(true)
                }}>
                <Text style={styles.btnTxt}>Filtros🌪</Text>
              </TouchableOpacity>
            </View>
            {/* Botão Notificações */}
            <View style={styles.colButton}>
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
            {/* Botão Feedback */}
            <View style={styles.colButton}>
              <TouchableOpacity
                style={styles.userBtnOption}
                onPress={() => {
                  setver(false)
                }}
                onPressOut={() => navigation.navigate('FeedbackNew')
                }>
                <Text style={styles.btnTxt}>Feedback😀</Text>
              </TouchableOpacity>
            </View>
            {/* Botão sair */}
            <View style={styles.fimColButton}>
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
            {/* Botão retornar */}
            <View style={{ bottom: 8, position: "absolute", width: "100%" }}   >
              <TouchableOpacity
                style={styles.retornar}
                onPress={() => {
                  setver(false)
                }}>
                <Text style={styles.btnTxt}>↩Retornar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Modal de filtro*/}
        <Modal
          //Modal de filtro
          transparent={true}
          animationType='slide'
          visible={isVisible}
        >
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
            {/* Filtrar perigo */}
            <View style={styles.colText}>
              <Text style={{ fontSize: 20, color: "#fff", position: 'absolute' }}>Filtrar perigo:</Text>
              <View style={{ flex: 1, flexDirection: 'row', paddingTop: '7%' }}>
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
            {/* Filtrar Por periodo */}
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
            </View>
            {/* Horario do ponto */}
            <View style={styles.fimColText}>
              <Text style={{ fontSize: 20, color: "#fff", position: 'absolute', left: '3%' }}>Horario do ponto:</Text>
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
              {/*             
            <CheckBox
              style={{ padding: 10 }}
              onClick={() => {
                setisChecked(!isChecked)
              }}
              checkedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao.png")} />}
              unCheckedImage={<Image style={{ height: 48, width: 22, borderRadius: 10, bottom: 5 }} source={require("../assets/pinhao_black.png")} />}
              isChecked={isChecked}
              leftText={isChecked ? "Sim 👍" : "Não 👎"}
            /> */}
            </View>
            {/* Retornar */}
            <View style={{ bottom: 8, position: "absolute", width: "100%" }}>
              <TouchableOpacity
                style={styles.retornar}
                onPress={() => {
                  setisVisible(false)
                }}>
                <Text style={styles.btnTxt}>↩Retornar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* Modal dos ponto */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={ponto}
        >
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            {/* Botão Filtros */}
            <View style={styles.conteudoPonto}>
              <View style={styles.campo0}>
                {/* Campo de indicador de ponto */}
                <Text style={{ color: '#fff', margin: '2%', fontSize: 18 }}>Ponto:</Text>
                <View style={styles.campo2}>
                  <Text> {pontoNome} </Text>
                </View>
                {/* Campo de descreção */}
                <Text style={{ color: '#fff', margin: '2%', fontSize: 18 }}>Descrição:</Text>
                <View style={styles.campo3}>
                  <Text> {pontoEndereco} {perigo} </Text>
                </View>
                {/* Campo de nivel de perigo */}
                <Text style={{ color: '#fff', margin: '2%', fontSize: 18 }}>Nivel de perigo:</Text>
                <View style={styles.campo5}>
                  <TouchableOpacity
                    onPress={() => { setisblue('black'); setisgreen('green'); setisyellow('yellow'); setisorange('orange'); setisred('red'); setPerigo(1); }}
                    style={{ backgroundColor: 'blue', height: '60%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: isblue, fontSize: 38 }}>✔</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { setisgreen('black'); setisblue('blue'); setisyellow('yellow'); setisorange('orange'); setisred('red'); setPerigo(2); }}
                    style={{ backgroundColor: 'green', height: '60%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: isgreen, fontSize: 38 }}>✔</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { setisgreen('green'); setisblue('blue'); setisyellow('black'); setisorange('orange'); setisred('red'); setPerigo(3); }}
                    style={{ backgroundColor: 'yellow', height: '60%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: isyellow, fontSize: 38 }}>✔</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { setisgreen('green'); setisblue('blue'); setisyellow('yellow'); setisorange('black'); setisred('red'); setPerigo(4); }}
                    style={{ backgroundColor: 'orange', height: '60%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: isorange, fontSize: 38 }}>✔</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { setisgreen('green'); setisblue('blue'); setisyellow('yellow'); setisorange('orange'); setisred('black'); setPerigo(5); }}
                    style={{ backgroundColor: 'red', height: '60%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: isred, fontSize: 38 }}>✔</Text>
                  </TouchableOpacity>
                  {/* <Image style={styles.paleta} source={require("../assets/paleta.png")} /> */}
                </View>
                <TouchableOpacity
                  style={styles.btnOcorrencia}
                  onPress={() => {
                    setver(false);
                    // setponto(false);
                    setisblue('blue');
                    setisgreen('green');
                    setisyellow('yellow');
                    setisorange('orange');
                    setisred('red');
                    setPerigo(0);
                  }}>
                  <Text style={styles.btnTxt}>Ver ocorrencias❗</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.campo1}>
                <TouchableOpacity
                  style={styles.userBtnOption}
                  onPress={() => {
                    setver(false);
                    setponto(false);
                    navigation.navigate('FeedbackNew');
                  }}>
                  <Text style={styles.btnTxt}>Feedback😀</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Botão retornar */}
            <View style={{ bottom: 8, position: "absolute", width: "100%" }}   >
              <TouchableOpacity
                style={styles.retornar}
                onPress={() => {
                  setponto(false)
                }}>
                <Text style={styles.btnTxt}>↩Retornar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/*     MAPA   */}
      <View style={styles.mapaView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          enableZoomControl={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnabled={true}
          style={styles.mapaView}
          initialRegion={{
            latitude: -25.495929967534504,
            longitude: -49.302469015104435,
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0221,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: -25.495929967534504,
              longitude: -49.302469015104435,
            }}
            title={"Faculdades Santa Cruz"}
            description={"Novo Mundo, Curitiba - State of Paraná, 81050-290"}
            onPress={() => {
              setponto(true);
              setPontoNome('Universidade Santa Cruz');
              setPontoEndereco('Rua Primo Lourenço Tosin, 1082 - Novo Mundo, Curitiba - PR, 81050-290');
            }}
          />
          <MapView.Marker
            coordinate={{
              latitude: -25.4974606,
              longitude: -49.303585000,
            }}
            title={"Unidade de Saude Vila Feliz"}
            description={"R. Pedro Gusso, 878-1030 - Novo Mundo, Curitiba - PR, 81050-200"}
            onPress={() => {
              setponto(true);
              setPontoNome('Unidade de Saude Vila Feliz');
              setPontoEndereco('R. Pedro Gusso, 878-1030 - Novo Mundo, Curitiba - PR, 81050-200');
            }}
          />
          <MapView.Marker
            coordinate={{
              latitude: -25.494362882244992,
              longitude: -49.29910549458465
            }}
            title={"Rua João Bonat, 432"}
            description={"Novo Mundo, Curitiba - State of Paraná, 81050-170"}
          />
          <MapView.Marker
            coordinate={{
              latitude: -25.492991453744153,
              longitude: -49.29829236295225
            }}
            title={"Rua Paulina Ader, 836"}
            description={"Novo Mundo, Curitiba - State of Paraná, 81050-250"}
          />

          <MapView.Marker
            coordinate={{
              latitude: -25.490131141066176,
              longitude: -49.28912598367627
            }}
            title={"Rua Maria Trevisan Tortato, 160"}
            description={"Novo Mundo, Curitiba - State of Paraná, 81020-000"}
          />

          <MapView.Marker
            coordinate={{
              latitude: -25.432762860035012,
              longitude: -49.37380626359049
            }}
            title={"Br 277 - Km 100 (Sent. Ctba)"}
            description={"Riviera, Curitiba - State of Paraná, 81295-000"}
          />
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
        </MapView>
      </View>

      {/* Area de opções! */}
      <View style={styles.Opcoes} >
        {/* botão para abrir modal de opções */}
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setver(true)
          }}>
          <Text style={styles.btnTxt}>Opções </Text>
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
          <Text style={styles.btnTxt}>Filtro </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  perfTam: {
    height: 25,
    width: 25,
    zIndex: 1,
    borderRadius: 30,
  },
  picker: {
    width: "45%",
    left: "15%",
    color: "#fff"
  },
  retornar: {
    backgroundColor: '#070a08',
    left: 2,
    padding: 15,
    borderRadius: 15,
    width: '99%',
  },
  btnOcorrencia: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
    maxHeight: '70%',
    marginTop: '5%'
  },
  userBtnOption: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
    maxHeight: '70%'
  },
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '35%',
  },
  image: {
    justifyContent: 'flex-start',
    zIndex: -1,
  },
  colText: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80,
    width: "97%",
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#2d742d',
  },
  fimColText: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 80,
    width: "97%",
    marginBottom: '20%',
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#2d742d',
  },
  colButton: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 80,
    width: "97%",
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#2d742d',
    justifyContent: 'center'
  },
  fimColButton: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 80,
    width: "97%",
    marginBottom: '20%',
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#2d742d',
    justifyContent: 'center'
  },
  conteudoPonto: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: '80%',
    width: "97%",
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#2d742d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  campo0: {
    height: '70%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#318c46',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  campo1: {
    marginTop: '5%',
    height: '15%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#318c46',
    justifyContent: 'center',
    alignItems: 'center',
  },
  campo2: {
    height: '10%',
    width: '98%',
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    // margin:'5%'
  },
  campo3: {
    height: '20%',
    width: '98%',
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  campo4: {
    height: '20%',
    width: '98%',
    borderRadius: 10,
    backgroundColor: '#fff',
    backgroundColor: '#318c46',
    justifyContent: 'center',
    alignItems: 'center',
  },
  campo5: {
    flex: 2,
    flexDirection: 'row',
    height: '20%',
    width: '98%',
    borderRadius: 10,
    backgroundColor: '#535454',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paleta: {
    width: '100%',
    borderRadius: 10
  },
  modal: {
    width: '50%',
    height: '50%',
    position: 'relative',
    bottom: 0,
    justifyContent: 'center',
  },
  Opcoes: {
    backgroundColor: '#2d742d',
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
    position: 'absolute',
    zIndex: -2
  }
});
//export default TelaCentral;