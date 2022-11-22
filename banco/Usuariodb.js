
import {app, db, Usuario} from '../banco/firebaseConnection';
import { collection, addDoc , firestore, getDoc,getDocs, where, query, Fieldpath,documentId ,connectFirestoreEmulator} from "firebase/firestore";
import { LogBox } from 'react-native';
import 'firebase/firestore';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])
const Usuarios = collection(db,'Usuario');

const Feedback = collection(db,'Feedback');


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

export async function RegistrarFeedback( comentario, data, nome, nota, pontoNome, cpf)
{
   addDoc(Feedback,({   
      CPF: cpf,
      Comentario: comentario,
      Data: data,
      Nome: nome, 
      Nota : nota, 
      PontoNome: pontoNome,
    }));
} 

export async function LoginUsuario( cpf,  senha)
{
   console.log("entrou");
   const q = query(Usuarios, where("CPF", "==", cpf));
   var ID = "0";
   if( q != null)
   {
      console.log("procurou");
      //const querySnapshot =  getDocs(q);
      /*const b = query(q, where('Senha', '==', [senha]));
      if(b != null)
      {
         console.log("foi");
         return "Foi";
      }
      else{
         console.log("não foi");
         return "Falha no Login";
      }
   */
     /* const Us = getDoc(q);
      console.log(Us.Senha);
      if(Us.Senha == senha)
      {
         console.log("comparou");

         ID = Us.CPF
         return ID;

      }
      */
  const querySnapshot = await getDocs(q);
   querySnapshot.forEach((Usuario) => {
      console.log("comparou");
      console.log(Usuario.data());
      console.log(Usuario.data().Senha);
      //console.log(Usuario.Senha);

      if(Usuario.data().Senha === senha)
      {
         console.log("achou senha");

         //ID  = Fieldpath(Usuario);
         ID = Usuario.data().CPF
         console.log("Id: " + ID );

         return ID;

      }else{
         console.log("Falha no Login");
   
         return "Falha no Login";
      }
 
   })
   }
   else{
      console.log("Falha no Login");

      return "Falha no Login";
   }
  
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