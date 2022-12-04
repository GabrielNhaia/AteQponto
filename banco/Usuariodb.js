
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
   var entrou = false;
   const q = query(Usuarios, where("CPF", "==", cpf));
   var ID = "0";
   if( q != null)
   {
      console.log("procurou");
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((Usuario) => {
         console.log("comparou");
         console.log(Usuario.data().Senha);
         if(Usuario.data().Senha === senha)
         {
            console.log("achou senha");

            ID = Usuario.data().CPF
            console.log("Id: " + ID );
            entrou = true;
            console.log(entrou);

        }else{
            console.log("Falha no Login");
            entrou = false;
      }
 
   })
   }
   else{
      console.log("Falha no Login");
      entrou = false;

   }
   return entrou;
  
}


export async function CarregarUsuario ( cpf)
{
   const q = query(Usuarios, where("CPF", "==", cpf));
   const querySnapshot =  getDoc(q);
   return querySnapshot.data();

}
export async function AlterarUsuario (cpf,nome,email, senha, noti)
{ 
   const q = query(Usuarios, where("CPF", "==", cpf));
   const querySnapshot =  getDoc(q);
   updateDoc(querySnapshot,({   
      Email : email, 
      Notificacao: noti,
      Nome: nome, 
      Senha: senha, 
    }));


}
export async function DeletarUsuario (cpf)
{
   const q = query(Usuarios, where("CPF", "==", cpf));
   const querySnapshot =  getDoc(q);
   deleteDoc(querySnapshot);
}