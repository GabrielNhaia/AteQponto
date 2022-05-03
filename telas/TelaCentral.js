
import { Component, React } from 'react';
import { Button, Modal, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



class TelaCentral extends Component {

  constructor(props) {
    super(props);
    this.state = { isVisible: false, ver: false };

  }


  render() {

    return (


      <View style={styles.container}>

        <View style={{ height: 200, width: 200 }}>
          <Modal
            animationType='slide'
            visible={this.state.ver}
          >
            <Image style={{ height: 200, width: 100, bottom: 25,top:25, left: "37%", borderRadius: 12 }} source={require("../assets/pinhao.png")} />
            <View 
              style={{bottom:0, position:"absolute", width:"100%"}}
            > 
              <Button
                style={{
                  height: 150,
                  bottom: 0,
                  position: "absolute"
                }}
                title="Retornar"
                onPress={() => {
                  this.setState({ ver: false })
                }}
              />
            </View>
          </Modal>

          <Modal
            animationType='slide'
            visible={this.state.isVisible}
          >
            <View>
              <Text>Filtrar perigo:</Text>
            </View>
            <View>
              <Text>Filtrar Por:</Text>
            </View>
            <View>
              <Text>Mostrar pontos?</Text>
            </View>
            <View style={{ height: 100, width: 150, backgroundColor: "#555", borderColor: "#888", borderWidth: 5, margin: 10, bottom: 10, left: 25, position: "absolute" }}>
              <Button
                style={{
                  height: 150,
                  bottom: 0,
                  position: "absolute"
                }}
                title="Retornar"
                onPress={() => {
                  this.setState({ isVisible: false })
                }}
              />
            </View>
          </Modal>
        </View>


        <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/MapaPlaceholder.jpg")} />
        </View>



        <View style={styles.Opcoes} >
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => {
              this.setState({ ver: true })
            }}>
            <Text style={styles.btnTxt}>Opções</Text>
          </TouchableOpacity>

          <Text style={styles.Hora}>
            HH:MM
          </Text>

          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => {
              this.setState({ isVisible: true })
            }}>
            <Text style={styles.btnTxt}>Filtro</Text>
          </TouchableOpacity>
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

export default TelaCentral;