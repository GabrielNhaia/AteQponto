import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './Telas/Tela1';
import { Component } from 'react';
import { Button, Modal, StyleSheet, Text, View, } from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {isVisible:false};
  }
  render ( ) {

    const Stack = createNativeStackNavigator();
    
    return(
      

      /*
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tela1'>
          <Stack.Screen
            name="Tela1" Component={Tela1}
            opitions={{
              title: "teste",
            }} />
        </Stack.Navigator>
      </NavigationContainer>
      */

      <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='Tela1'>
              <Stack.Screen
                name="Tela1" Component={Tela1}
              >
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        

          <Modal style={styles.modal}
            animationType={'slide'}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              this.setState({ isVisible: false });
            } }
          >
            <Text>Conteudo do modal</Text>

            <Button
              title="tela2"
              onPress={() => {
                this.setState({ isVisible: false });
              } } />

            <Button
              title="teste"
              onPress={() => {
                this.setState({ isVisible: false });
              } } />
          </Modal>


          <Text>Aperte o botão para abrir o modal</Text>
          <Button
            title="teste"
            onPress={() => {
              this.setState({ isVisible: true });
            } } />



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