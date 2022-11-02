import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { RegistrarFeedback } from '../banco/Usuariodb';

export default function FeedbackNew({ navigation, route }) {

  const [horas, sethoras] = useState("09");
  const [minutos, setminutos] = useState("30");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");  
  const [comentario, setComentario] = useState("");

  return (
    <View style={styles.container}>
      {/* Titulo */}
      <View style={styles.contemTitulo}>
        <Text style={styles.titulo}>Feedback do Ponto</Text>
      </View>
      {/* Conteudo */}
      <View style={styles.contemTela}>
        <View style={styles.conteudo}>
          <View style={styles.campoPonto}>
            <Text style={styles.txt}>Ponto:</Text>
            <TextInput
              style={styles.inputPonto}
              placeholder="Ponto"
            />
          </View>
          <View style={styles.campoPonto}>
            <Text style={styles.txt}>Horario:</Text>
            {/*PICKER DA HORA*/}
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
            </Picker>
            {/*PPICKER DO MINUTOS*/}
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
          <View style={styles.campoPonto}>
            <Text style={styles.txt}>Data:</Text>
          </View>
          <View style={styles.campoAcontecimento}>
            <Text style={styles.txt}>Acontecimento:</Text>
            <View style={styles.campo}>
              <TextInput
                style={styles.inputCampo}
                placeholder="Feedback"
                onChangeText={(value) => setComentario(value)} 
              />
            </View>
          </View>
        </View>
      </View>
      {/* Botões */}
      <View style={{ paddingBottom: 12, paddingTop: 20 }}>
        {/* Botão alterar dados */}
        <View style={{ width: "100%", Height: '10%', alignItems: 'center', paddingBottom: 10 }}>
          <TouchableOpacity
            style={styles.userBtnOption}
            onPress={() => {
              RegistrarFeedback(comentario, "data", "nome", "nota", "pontoNome", "11111111111"),
              navigation.navigate('Login')}
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
  picker: {
    width: "35%",
    height: '60%',
    color: "#fff",
    backgroundColor: '#2d742d',
  },  
  campo: {
    minHeight: '100%',
    minWidth: '95%',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    borderRadius: 15,
  },
  inputCampo: {
    minHeight: '40%',
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
});