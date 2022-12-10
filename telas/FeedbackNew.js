import { View, StyleSheet, TouchableOpacity, Text, TextInput, Modal } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { RegistrarFeedback } from '../banco/Usuariodb';
import { ScrollView } from 'react-native-gesture-handler';

export default function FeedbackNew({ navigation, route }) {

  const pontos = ['UniSantaCruz', 'Pedro Gusso', 'option item 3', 'option item 4', 'option item 5'];

  const [dia, setDia] = useState("04");
  const [mes, setMes] = useState("11");
  const [ano, setAno] = useState("2022");
  const [horas, sethoras] = useState("09");
  const [minutos, setminutos] = useState("30");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pontoNome, setPontoNome] = useState("UniSantaCruz");
  const [comentario, setComentario] = useState("Acontecimento");

  const [isblue, setisblue] = useState('blue');
  const [isgreen, setisgreen] = useState('green');
  const [isyellow, setisyellow] = useState('yellow');
  const [isorange, setisorange] = useState('orange');
  const [isred, setisred] = useState('red');
  const [isblueFiltro, setisblueFiltro] = useState('blue');
  const [isgreenFiltro, setisgreenFiltro] = useState('green');
  const [isyellowFiltro, setisyellowFiltro] = useState('yellow');
  const [isorangeFiltro, setisorangeFiltro] = useState('orange');
  const [isredFiltro, setisredFiltro] = useState('red');
  const [perigo, setPerigo] = useState(0);
  const [PerigoPonto, setPerigoPonto] = useState(0);

  const [selectPonto, setSelectPonto] = useState(false);
  const [selectHorario, setSelectHorario] = useState(false);
  const [selectData, setSelectData] = useState(false);
  const [selectAcontecimento, setSelectAcontecimento] = useState(false);

  return (
    <View style={styles.container}>

      {/* Modais */}
      {/* Select de Ponto */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={selectPonto}
      >
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>

          {/* Botão Feedback */}
          <View style={styles.colButton}>
            <Picker
              numberOfLines="1"
              style={styles.inputPontoNome}
              selectedValue={pontoNome}
              onValueChange={(itemValue) =>
                setPontoNome(itemValue)
              }>
              <Picker.Item label="UniSantacruz" value="UniSantacruz" />
              <Picker.Item label="Pedro Gusso" value="Pedro Gusso" />
              <Picker.Item label="UniSantacruz2" value="UniSantacruz2" />
              <Picker.Item label="Pedro Gusso2" value="Pedro Gusso2" />
              <Picker.Item label="UniSantacruz3" value="UniSantacruz3" />
              <Picker.Item label="Pedro Gusso3" value="Pedro Gusso3" />
            </Picker>
          </View>
          {/* Botão sair */}
          <View style={styles.fimColButton}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setSelectPonto(false)
              }}  >
              <Text style={styles.btnTxt}>OK↩</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Select de Horario */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={selectHorario}
      >
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>

          {/* Botão Feedback */}
          <View style={styles.colButton}>
            <View style={styles.campoPontoNome}>
              <Text style={styles.txt}>Horario:</Text>
              {/*PICKER DA HORA*/}
              <Picker
                style={styles.picker}
                numberOfLines="1"
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
              </Picker>
              {/*PICKER DO MINUTOS*/}
              <Picker
                style={styles.picker}
                numberOfLines="1"
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
          </View>
          {/* Botão sair */}
          <View style={styles.fimColButton}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setSelectHorario(false)
              }}  >
              <Text style={styles.btnTxt}>OK↩</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Select de Data */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={selectData}
      >
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>

          {/* Botão Feedback */}
          <View style={styles.colButton}>
            <View style={styles.campoPontoNome}>
              {/*PICKER DA HORA*/}
              <Picker
                style={styles.pickerData}
                selectedValue={dia}
                onValueChange={(itemValue) =>
                  setDia(itemValue)
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
                <Picker.Item label="25" value="25" />
                <Picker.Item label="26" value="26" />
                <Picker.Item label="27" value="27" />
                <Picker.Item label="28" value="28" />
                <Picker.Item label="29" value="29" />
                <Picker.Item label="30" value="30" />
              </Picker>
              {/*PICKER DO MES*/}
              <Picker
                style={styles.pickerData}
                selectedValue={mes}
                onValueChange={(itemValue) =>
                  setMes(itemValue)
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
              </Picker>
              {/*PICKER DO Ano*/}
              <Picker
                style={styles.picker}
                selectedValue={ano}
                onValueChange={(itemValue) =>
                  setAno(itemValue)
                }>
                <Picker.Item label="2019" value="2019" />
                <Picker.Item label="2020" value="2020" />
                <Picker.Item label="2021" value="2021" />
                <Picker.Item label="2022" value="2022" />
                <Picker.Item label="2023" value="2023" />
              </Picker>
            </View>
          </View>
          {/* Botão sair */}
          <View style={styles.fimColButton}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setSelectData(false)
              }}  >
              <Text style={styles.btnTxt}>OK↩</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* Select de Acontencimento */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={selectAcontecimento}
      >
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>

          {/* Botão Feedback */}
          <View style={styles.colButton}>
            <View style={styles.campoPontoNome}>
              {/*PICKER DO Ano*/}
              <Picker
                style={styles.pickerAcontecimento}
                selectedValue={comentario}
                onValueChange={(itemValue) =>
                  setComentario(itemValue)
                }>
                {/* <Picker.Item label="Seguro" value="Seguro" />
                <Picker.Item label="Aceitavel" value="Aceitavel" />
                <Picker.Item label="Suspeito" value="Suspeito" />
                <Picker.Item label="Perigoso" value="Perigoso" />
                <Picker.Item label="Muito Perigoso" value="MuitoPerigoso" /> */}
                <Picker.Item label="Briga" value="Briga" />
                <Picker.Item label="Assalto" value="Assalto" />
                <Picker.Item label="Roubo" value="Roubo" />                
                <Picker.Item label="Furto" value="Furto" />
                <Picker.Item label="Sequestro" value="Sequestro" />
                <Picker.Item label="Homicídio" value="Homicidio" />
                <Picker.Item label="Abuso" value="Abuso" />
              </Picker>
            </View>
          </View>
          {/* Botão sair */}
          <View style={styles.fimColButton}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => {
                setSelectAcontecimento(false)
              }}  >
              <Text style={styles.btnTxt}>OK↩</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Titulo */}
      <View style={styles.contemTitulo}>
        <Text style={styles.titulo}>Feedback do Ponto</Text>
      </View>
      {/* Conteudo */}
      <View style={styles.contemTela}>
        <View style={styles.conteudo}>
          <ScrollView>
            {/* PIcker ponto */}
            <View style={styles.campoPontoNome}>
              <Text style={styles.txt}>Ponto:</Text>
              <TouchableOpacity
                style={styles.selectPontoButton}
                onPress={() => {
                  setSelectPonto(true)
                }}>
                <Text style={styles.btnTxt}>{pontoNome}↩</Text>
              </TouchableOpacity>
            </View>
            {/* Picker do Horario */}
            <View style={styles.campoPontoNome}>
              <Text style={styles.txt}>Horario:</Text>
              {/*PICKER DA HORA*/}
              <TouchableOpacity
                style={styles.selectHorarioButton}
                onPress={() => {
                  setSelectHorario(true)
                }}>
                <Text style={styles.btnTxt}>⏰ {horas}:{minutos} ⏰</Text>
              </TouchableOpacity>
            </View>
            {/* Picker do Dia */}
            <View style={styles.campoPonto}>
              <Text style={styles.txt}>Data:</Text>
              {/*PICKER DO DIA*/}
              <TouchableOpacity
                style={styles.selectDataButton}
                onPress={() => {
                  setSelectData(true)
                }}>
                <Text style={styles.btnTxt}>⏰ {dia}/{mes}/{ano} ⏰</Text>
              </TouchableOpacity>
            </View>

            {/* Campos */}
            <View style={{ left: 10 }}>
              <Text style={styles.txt}>Perigo:</Text>
            </View>
            {/* Campo Perigo */}
            <View style={styles.campoPerigo}>
              <TouchableOpacity
                onPress={() => { setisblueFiltro('black'); setisgreenFiltro('green'); setisyellowFiltro('yellow'); setisorangeFiltro('orange'); setisredFiltro('red'); setPerigo(1); }}
                style={{ backgroundColor: 'blue', height: '50%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isblueFiltro, fontSize: 38 }}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { setisgreenFiltro('black'); setisblueFiltro('blue'); setisyellowFiltro('yellow'); setisorangeFiltro('orange'); setisredFiltro('red'); setPerigo(2); }}
                style={{ backgroundColor: 'green', height: '50%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isgreenFiltro, fontSize: 38 }}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { setisgreenFiltro('green'); setisblueFiltro('blue'); setisyellowFiltro('black'); setisorangeFiltro('orange'); setisredFiltro('red'); setPerigo(3); }}
                style={{ backgroundColor: 'yellow', height: '50%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isyellowFiltro, fontSize: 38 }}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { setisgreenFiltro('green'); setisblueFiltro('blue'); setisyellowFiltro('yellow'); setisorangeFiltro('black'); setisredFiltro('red'); setPerigo(4); }}
                style={{ backgroundColor: 'orange', height: '50%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isorangeFiltro, fontSize: 38 }}>X</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { setisgreenFiltro('green'); setisblueFiltro('blue'); setisyellowFiltro('yellow'); setisorangeFiltro('orange'); setisredFiltro('black'); setPerigo(5); }}
                style={{ backgroundColor: 'red', height: '50%', width: '15%', marginRight: '3%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: isredFiltro, fontSize: 38 }}>X</Text>
              </TouchableOpacity>
            </View>
            {/* Campo Acontecimento */}
            <View style={styles.campoAcontecimento}>
              <Text style={styles.txt}>Acontecimento:</Text>
              <View style={styles.campo}>
                {/*PICKER DO DIA*/}
                <TouchableOpacity
                  style={styles.selectComentarioButton}
                  onPress={() => {
                    setSelectAcontecimento(true)
                  }}>
                  <Text style={styles.btnTxt}>{comentario}</Text>
                </TouchableOpacity>
                {/* <TextInput
                  style={styles.inputCampo}
                  placeholder="Feedback"
                  placeholderTextColor={"#a8a7a7"}
                  onChangeText={(value) => setComentario(value)}
                /> */}
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
      {/* Botões */}
      <View style={{ paddingBottom: 12, paddingTop: 20 }}>
        {/* Botão alterar dados */}
        <View style={{ width: "100%", Height: '10%', alignItems: 'center', paddingBottom: 10 }}>
          <TouchableOpacity
            style={styles.userBtnOption}
            onPress={() => {
              RegistrarFeedback(comentario, dia + '-' + mes + '-' + ano + ' hr:' + horas + ':' + minutos, "nome", pontoNome, "11111111111", perigo),
                navigation.navigate('Login')
            }
            }>
            <Text style={styles.btnTxt}>Enviar Feedback 📨</Text>
          </TouchableOpacity>
        </View>
        {/* Botão retornar */}
        {/* <View style={{ width: "100%", Height: '10%', alignItems: 'center', }}>
          <TouchableOpacity
            style={styles.userBtnOption}
            onPress={() => navigation.navigate('TelaCentral', {route})
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
    justifyContent: 'flex-end',
    backgroundColor: '#2d742d',
  },
  userBtnOption: {
    backgroundColor: '#070a08',
    borderRadius: 15,
    width: '95%',
    alignItems: 'center',
  },
  campo: {
    minHeight: '100%',
    minWidth: '9%',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    borderRadius: 15,
  },
  inputCampo: {
    minHeight: '5%',
    minWidth: '95%',
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  campoAcontecimento: {
    flex: 2,
    flexDirection: 'column',
    margin: 10,
  },
  contemTitulo: {
    minHeight: '12%',
    alignItems: 'center',
    paddingBottom: 10,
    justifyContent: 'flex-end',
  },
  titulo: {
    fontSize: 35,
    color: '#ffF',
  },
  contemTela: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '70%',
    width: '100%',
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#318c46',
    height: '100%',
    width: '90%',
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    paddingTop: 12,
    height: 45,
  },
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '35%',
  },
  txt: {
    fontSize: 25,
    color: '#fff',
    zIndex: 1,
  },
  campoPonto: {
    flex: 2,
    flexDirection: 'row',
    maxHeight: '12%',
    margin: 10,
  },
  inputPonto: {
    height: '70%',
    width: '75%',
    borderRadius: 11,
    backgroundColor: '#fff',
    marginLeft: '1%',
  },
  campoPontoNome: {
    flex: 2,
    flexDirection: 'row',
    maxHeight: '20%',
    margin: 10,
  },
  campoPerigo: {
    flex: 2,
    flexDirection: 'row',
    maxHeight: 280,
    width: '92%',
    left: 15,
    borderRadius: 10,
    backgroundColor: '#535454',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPontoNome: {
    height: '80%',
    width: '75%',
    justifyContent: 'center',
    borderRadius: 11,
    backgroundColor: '#fff',
    marginLeft: '1%',
    marginTop: '5%',
  },
  colButton: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 290,
    width: "97%",
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#318c46',
    justifyContent: 'center'
  },
  fimColButton: {
    flex: 1,
    flexDirection: 'column',
    maxHeight: 70,
    width: "97%",
    paddingLeft: "2%",
    margin: 5,
    marginLeft: 5,
    borderRadius: 10,
    backgroundColor: '#318c46',
    justifyContent: 'center'
  },
  selectPontoButton: {
    backgroundColor: '#070a08',
    justifyContent: 'center',
    left: 2,
    padding: 15,
    borderRadius: 15,
    width: '80%',
    maxHeight: 50,
  },
  selectHorarioButton: {
    backgroundColor: '#070a08',
    justifyContent: 'center',
    left: 2,
    padding: 15,
    borderRadius: 15,
    width: '75%',
    maxHeight: 50,
  },
  selectDataButton: {
    backgroundColor: '#070a08',
    justifyContent: 'center',
    left: 2,
    padding: 15,
    borderRadius: 15,
    width: '83%',
    maxHeight: 50,
  },
  selectComentarioButton: {
    backgroundColor: '#070a08',
    justifyContent: 'center',
    left: 2,
    padding: 15,
    borderRadius: 15,
    width: '100%',
    maxHeight: 50,
  },
  picker: {
    width: "35%",
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 11,
  },
  pickerAcontecimento: {
    width: "98%",
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 11,
  },
  pickerData: {
    width: "30%",
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 11,
  },

});