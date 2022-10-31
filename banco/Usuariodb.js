import {app, db, Usuario} from '../banco/firebaseConnection';
import { collection, addDoc , firestore} from "firebase/firestore";
import { LogBox } from 'react-native';
import 'firebase/firestore';
// import {firestore} from '@react-native-firebase/firestore';
//import Usuario from '../classes/Usuario';
//const database = firebase();

const Usuarios = collection(db,'Usuario');
LogBox.ignoreLogs(['Setting a timer for a long period of time'])

// const CadastrarUsuario = app.firestore().collection('entities')

export async function CadastrarUsuario( nome, cpf, email, senha, noti)
{
   addDoc(Usuarios,({   
      CPF: cpf,
      Email : email, 
      Notificacao: noti,
      Nome: nome, 
      Senha: senha, 
    }));
   } 
   
function LoginUsuario ( CPF,  senha)
{

   db()
   .ref('Usuario/')
   .onValue((CPF) => {
      const data = snapshot.val();
      if(data.Senha == senha)
      {
         //updateStarCount(postElement, data);
         return data;

      }
      else{
         return "Erro no login";
      }
   });
   return "Usuario não cadastrado";
}
function CarregarUsuario ( ID)
{
   db()
   .ref('Usuario/')
   .onValue((ID) => {
      const data = snapshot.val();
      //updateStarCount(postElement, data);
      return data;
   });
}
function AlterarUsuario (  id,nome,email, senha, noti)
{ 
   db()
   .ref('/Usuario/'+id)
   .update({
     Nome: nome, 
     Email : email, 
     Senha: senha, 
     Notificacao: noti
 })

}
function DeletarUsuario (id)
{
   db().ref('/Usuario/'+{id}+'').remove();


}
