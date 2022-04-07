import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
//import { render } from 'react-dom';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {isVisible:false};
  }
  render ( ) {
    return(
      <View style={styles.container}>
               
        
        <Modal style ={styles.modal}
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose= {() => {
            this.setState({isVisible: false})
          }}
        >                      
          <Text>Conteudo do modal</Text>
          <Button          
          title="teste"
          onPress={() => {
            this.setState({isVisible:false})
          }}
          />
        </Modal>
        
        
        <Text>Aperte o botão para abrir o modal</Text>
            <Button             
              title="teste"
              onPress={() => {
                this.setState({isVisible:true})
              }}
            />
      
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
  modal:{
    width: '50%',
    height:'50%',    
    position: 'relative',
    bottom: 0,    
    justifyContent: 'center',
  },
  dialogo:{
    bottom:0,
    height:'50%', 
    width:'50%',
  },
});