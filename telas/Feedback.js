{/* Imports */ }
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Platform } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
// import DatePicker from 'react-native-date-picker';
// import IOSPicker from 'react-native-ios-picker';

{/*Export*/ }
export default function Feedback({ navigation }) {

  const dados = ["1", "2", "3", "4", "5", "6"];
  const [horas, sethoras] = useState("09");
  const [minutos, setminutos] = useState("30");
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


  return (
    <View style={styles.container}>
      {/* TAMANHO DA TELA */}
      <View style={styles.tela}>

        {/* TITULO */}
        <View>
          <Text style={styles.titulo}>Feedback do Ponto</Text>
        </View>

        {/* CONTEUDOS */}
        <View style={styles.Conteudos}>
          <View>
            <Text style={styles.ponto}>Ponto:</Text>
            <View style={styles.campoPonto}>
              <TextInput
                style={styles.inputPonto}
                placeholder="Ponto"
              />
            </View>
            <View style={{ width: "80%", marginLeft: 10 }}>
            </View>
          </View>
          <View style={styles.aoLado}>
            <Text style={styles.ponto}>Horario:</Text>
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
          <View style={{ flex: 2, flexDirection: 'row', }}>
            <Text style={styles.ponto}>Data:</Text>
            <View style={{ width: "80%", marginLeft: 10 }}>

              {/* BOTÃO DE ABRIR O DATAPICKER */}
              <TouchableOpacity
                style={styles.userBtnOption}
                onPress={() => setOpen(true)
                }>
                <Text style={styles.btnTxt}>Data</Text>
              </TouchableOpacity>
            </View>

            {/*PICKER DATA*/}
            {/* <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            /> */}
          </View>
          <View style={styles.terreno}>
            <Text style={styles.ponto}>Acontecimento:</Text>
            {/* <IOSPicker
              data={dados}
            onValueChange={(d, i) => this.change(d, i)} /> */}
            <View style={styles.campo}>

              <TextInput
                style={styles.inputCampo}
                placeholder="Feedback"
              />
            </View>
          </View>
        </View>
      </View>

      {/* BOTÕES ( Enviar FeedBack & Cancelar)  */}
      <View style={{ width: "100%", minHeight: '10%', alignItems: 'center', alignSelf: 'flex-end', justifyContent: 'center', }}>
        <TouchableOpacity
          style={styles.userBtnOption}
          onPress={() => navigation.navigate('TelaCentral')
          }>
          <Text style={styles.btnTxt}>Enviar Feedback</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtnOption}
          onPress={() => navigation.navigate('TelaCentral')
          }>
          <Text style={styles.btnTxt}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

{/* CSS DOS COMPONENTES ACIMA*/ }

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2d742d',
  },
  tela: {
    height: '77%',
    width: '100%',
    backgroundColor: '#2d742d',
    alignItems: 'center'
  },
  Conteudos: {
    flex: 2,
    alignItems: 'flex-start',
    flexDirection: 'column',
    maxWidth: "93%",
    backgroundColor: '#318c46',
    borderRadius: 15,
  },
  aoLado: {
    maxHeight: '15%',
    flex: 2,
    flexDirection: 'row',
  },
  terreno: {
    minHeight: '40%',
    minWidth: '95%',
    flex: 2,
    flexDirection: 'column',
    marginLeft: '2%',
  },
  picker: {
    width: "30%",
    color: "#fff",
  },
  userBtnOption: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  userBtn: {
    backgroundColor: '#070a08',
    padding: 15,
    borderRadius: 15,
    width: '35%',
  },
  btnTxt: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },

  titulo: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
  },

  ponto: {
    fontSize: 25,
    color: '#fff',
    marginLeft: 5,
    paddingTop: 20,
  },
  campo: {
    minHeight: '100%',
    minWidth: '95%',
    flex: 2,
    flexDirection: 'column',
    paddingTop: 10,
    borderRadius: 15,
  },

  inputCampo: {
    minHeight: '50%',
    minWidth: '95%',
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  inputPonto: {
    minHeight: '5%',
    minWidth: '75%',
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: -35,
    left: "28%",
  },

}
);