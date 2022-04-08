import { Component } from 'react';
//import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default class Tela1 extends Component{
    constructor(props){
        super(props);
        this.state = {isVisible:false};
      }

      render ( ) {
        return(
          <View>
              <Text>teste1</Text>
          </View>
        );
      }

}