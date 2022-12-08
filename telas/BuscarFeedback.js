import {View, StyleSheet,TouchableOpacity,Text} from 'react-native';
import {BuscarFeedbacks} from '../banco/Usuariodb';
import React, { Component, useState } from 'react';
import TelaCentral from './TelaCentral';
import RenderHtml from 'react-native-render-html';


export default function BuscarFeedback({navigation, route}) {
  
  const [NomePonto, setNomePonto] = useState('UniSantaCruz');
  var exibirBusca = BuscarFeedbacks(NomePonto);
 
  /*
  function BuscarFeed(Feedbacks){
    return new Promise ( (resolve) =>{
       console.log("Começo da busca");
       Feedbacks.push(BuscarFeedbacks(NomePonto));
       setTimeout( resolve(), 5000);
        console.log("final da busca");

     }).then(() => {
       console.log("resultado");
       Feedbacks.forEach((Feedback)  => {
         console.log("resultado");
         console.log("Perigo: "+ Feedback['Perigo']);
       });
     });
   }*/
    return (
        <View id="Teste" style={styles.container}>
            <View style={{ width: "100%", minHeight: '10%', alignItems: 'center', }}>
            <TouchableOpacity
              style={styles.userBtnOption}
              onPress={() => navigation.navigate('TelaCentral')
              }>
              <Text style={styles.btnTxt}>Sair🚪</Text>
            </TouchableOpacity>
            <Text style={styles.btnTxt2}>variavel {route.params?.pontoNome} , {TelaCentral.pontoNome} </Text>
                  <TouchableOpacity
                      style={styles.userBtn}
                      onPress={async () => {//console.log({exibirBusca}),
                      setNomePonto(route.params?.pontoNome);
                      var Feedbacks  = [];

                      /*
                      var Promises = [];
                      var ArrayinsidePromise = [];
                      */
                      //await BuscarFeed(Feedbacks);
                      //await Promises.push(BuscarFeedbacks(NomePonto));
                      //  await Feedbacks.push(BuscarFeedbacks(NomePonto));
                      Promise.all((await BuscarFeedbacks(NomePonto)).map((Object) => {
                        Feedbacks.push(Object);
                      }))
                     setTimeout( () => {
                      //ArrayinsidePromise = Array.from(Promises["_z"]);
                      //BuscarFeed(Feedbacks,ArrayinsidePromise["Array"]); 
                        var i = 0;

                       /* console.log(Promises);
                        console.log(ArrayinsidePromise);
                        //console.log(Promises["_z"]);
                        */
                        console.log(Feedbacks);

                        if(Feedbacks != null){
                        Feedbacks.forEach((Feedback)  => {
                          i++;
                        console.log(Feedback + "N:"+i);
                        console.log("Perigo: "+ Feedback["Perigo"]);
                       // const para = React.createElement("p", [], "Hello world");
                        //const element = React.getElementById("Teste");
                        //para.textContent 
                        /*<RenderHtml
                        //contentWidth={width}
                        source={ {
                          html: `
                        <p style='text-align:center;'>
                        "Feedback #"{i}" /n"+
                        "Nivel de Perigo: "{Feedback["Perigo"]} "/n"+
                        "Data do Ocorrido: "{Feedback["Data"]} "/n"+
                        "Tipo de Acontecimento: "{Feedback["Comentario"]}"/n"/                        
                        </p>`
                        }}
                      />*/
                        /* <p style='text-align:center;'>
                        "Feedback #"{i}" /n"+
                        "Nivel de Perigo: "{Feedback["Perigo"]} "/n"+
                        "Data do Ocorrido: "{Feedback["Data"]} "/n"+
                        "Tipo de Acontecimento: "{Feedback["Comentario"]}"/n"/                        
                        </p>`*/
                        //para.appendChild(node);
                        //const child = document.getElementById("p2",);
                        //element.appendChild(para);
                       

                      });}else{
                        console.log("Sem FeedBack ");
         
                   // <Text style={{color:"#fff"}}>FeedBack Nivel de Perigo: {Feedback["Perigo"]}</Text>

                      }
                      }, 5000);
                      /*
                     new Promise (async () => {
                      console.log("Começo da busca");
                       await Feedbacks.push(BuscarFeedbacks(NomePonto));
                      }).then(() => {
                        console.log("Final da busca");
                        Feedbacks.forEach((Feedback)  => {
                          console.log("Perigo: "+ Feedback['Perigo']);
                        });
                      });
                      */
                    }
                      
                      // console.log({Feedbacks})  
                      // console.log({perigoso})                
                    }                      
                    
                  >
                    <Text style={{color:"#fff"}}>ok {NomePonto} {route.params?.pontoNome}</Text>
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
    userBtnOption: {
      backgroundColor: '#070a08',
      padding: 15,
      borderRadius: 15,
      width: '95%',
      alignItems: 'center',
    },
    userBtn: {
      backgroundColor: '#070a08',
      padding: 15,
      borderRadius: 15,
      width: '35%',
    },
    btnTxt: {
      fontSize: 14,
      textAlign: 'center',
      color: '#fff',
    },
    btnTxt2: {
      fontSize: 24,
      textAlign: 'center',
      color: '#070a08',
      margin:25,
    },
});