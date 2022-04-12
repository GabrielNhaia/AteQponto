import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, Modal, StyleSheet, Text, View, Image } from 'react-native';

class telaCentral extends Component {

  constructor(props){
    super(props);
    this.state = {isVisible:false};
  }
  render ( ) {
    
    return(    
    
      <View style={styles.container}>
        <Modal
          style={{height: 300, width: 300}}
          animationType='fade'          
          visible={this.state.isVisible}
        >
          <Button title="Fechar" 
        onPress={() => {
          this.setState({isVisible:false})   
                  }}
      />

        </Modal>
        <View style={styles.container}>
          <Image style={styles.image} source={require("../assets/MapaPlaceholder.jpg")} />
        </View>
    

        
        <View style={styles.Opcoes} >
         <Button title="Opções" 
              onPress={() => {
                this.setState({isVisible:true})   
                        }}
            />
            <Text style={styles.Hora}>HH:MM</Text>
                 <Button             
              title="Filtro"
              onPress={() => {
                this.setState({isVisible:true})   
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
    height:'30%',
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
  modal:{
    width: '50%',
    height:'50%',    
    position: 'relative',
    bottom: 0,    
    justifyContent: 'center',
  },
  Opcoes:{
    justifyContent: 'center',
    position: 'absolute',
    bottom:0,
    flexDirection:"row",
  },
  Hora:{
    paddingLeft:80,
    paddingRight:80,
  },
  dialogo:{
    bottom:0,
    height:'50%', 
    width:'50%',
  },
});

export default telaCentral;