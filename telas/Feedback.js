import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker'
import IOSPicker from 'react-native-ios-picker';

export default function Feedback({ navigation }) {

  const dados = ["1", "2", "3", "4", "5", "6"];
  const [horas, sethoras] = useState("09");
  const [minutos, setminutos] = useState("30");
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


  return (
    <View style={styles.container}>
      <View style={styles.tela}>
        <View>
          <Text style={styles.titulo}>Feedback do Ponto</Text>
        </View>
        <View style={{ flex: 2, alignItems: 'flex-start', flexDirection: 'column' }}>
          <View>
            <Text style={styles.ponto}>Ponto:</Text>
          </View>
          <View style={styles.aoLado}>
            <Text style={styles.ponto}>Horario:</Text>
            {/*Picker da hora*/}
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
            {/*Picker dos minutos*/}
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
          <View>
            <Text style={styles.ponto}>Data:</Text>

            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => setOpen(true)
              }>
              <Text style={styles.btnTxt}>Data</Text>
            </TouchableOpacity>

            {/*Picker data*/}

            <DatePicker
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
            />

          </View>
          <View>
            <Text style={styles.ponto}>Acontecimento:</Text>
            {/* <IOSPicker
              data={dados}
            onValueChange={(d, i) => this.change(d, i)} /> */}
          </View>

        </View>
      </View>

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
  },
  aoLado: {
    maxHeight: '15%',
    flex: 1,
    flexDirection: 'row',
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
    color: '#ff0',
    textAlign: 'center',
  },

  ponto: {
    fontSize: 25,
    color: '#ff0',
    marginLeft: 5,
    paddingTop: 30,
  },


}
);
