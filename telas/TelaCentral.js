
import { Component, React } from 'react';
import { Button, Modal, StyleSheet, Text, View, Image } from 'react-native';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



class telaCentral extends Component {

  constructor(props) {
    super(props);
    this.state = { isVisible: false };

  }


  render() {

    return (


      <View style={styles.container}>
        <View style={{ height: 200, width: 200 }}>

          <Modal
            animationType='fade'
            visible={this.state.isVisible}
          >
            <View style={{ height: 100, width: 150, backgroundColor: "#555", borderColor: "#888", borderWidth: 5, margin: 10, bottom: 10, left: 25, position: "absolute" }}>
              <View style={{bottom:0, position:"absolute", width:140, borderRadius:225}}>

              <Button
                style={{
                  height: 150,
                  bottom: 0,
                  position: "absolute"
                }}
                title="Fechar"
                onPress={() => {
                  this.setState({ isVisible: false })
                }}
                />
                </View>
            </View>
          </Modal>
        </View>
        <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/MapaPlaceholder.jpg")} />
        </View>



        <View style={styles.Opcoes} >
          <Button
            style={{}}
            title="Opções"
            onPress={() => {
              this.setState({ isVisible: true })
            }}
          />

          <Text style={styles.Hora}>
            HH:MM
          </Text>

          <Button
            title="Filtro"
            onPress={() => {
              this.setState({ isVisible: true })
            }}
          />
        </View>
      </View>

    );
  }

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
  image: {
    justifyContent: 'flex-start',
    marginBottom: 700,
  },
  modal: {
    width: '50%',
    height: '50%',
    position: 'relative',
    bottom: 0,
    justifyContent: 'center',
  },
  Opcoes: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 9,
    flexDirection: "row",
  },
  Hora: {
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop:12
  },
  dialogo: {
    bottom: 0,
    height: '50%',
    width: '50%',
  },
});

export default telaCentral;