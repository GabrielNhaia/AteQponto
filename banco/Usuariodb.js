
import { app, db, Usuario } from '../banco/firebaseConnection';
import { collection, addDoc, firestore, getDoc, getDocs, where, query, Fieldpath, documentId, connectFirestoreEmulator } from "firebase/firestore";
import 'firebase/firestore';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const Usuarios = collection(db, 'Usuario');

const Feedback = collection(db, 'Feedback');


export async function CadastrarUsuario(nome, cpf, email, senha, noti) {
   addDoc(Usuarios, ({
      CPF: cpf,
      Email: email,
      Notificacao: noti,
      Nome: nome,
      Senha: senha,
   }));
}

export async function RegistrarFeedback(comentario, data, nome, pontoNome, cpf, perigo) {
   addDoc(Feedback, ({
      CPF: cpf,
      Comentario: comentario,
      Data: data,
      Nome: nome,
      PontoNome: pontoNome,
      Perigo: perigo
   }));
}

export async function LoginUsuario(cpf, senha) {
   console.log("entrou");
   var entrou = false;
   var nome = "";
   const q = query(Usuarios, where("CPF", "==", cpf));
   var ID = "0";
   if (q != null) {
      console.log("procurou");
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((Usuario) => {
         console.log("comparou");
         console.log(Usuario.data().Senha);
         if (Usuario.data().Senha === senha) {
            console.log("achou senha");
            ID = Usuario.data().CPF;
            nome = Usuario.data().Nome;
            console.log("Id: " + ID);
            console.log("userName: " + nome);
            entrou = true;
            console.log(entrou);

            return (nome, entrou);

         } else {
            console.log("Falha no Login");
            nome = Usuario.data().Nome;
            console.log("userName: " + nome);
            entrou = false;

            return (nome, entrou);
         }

      })
   }
   else {
      console.log("Falha no Login");
      entrou = false;

   }
   return (nome, entrou);

}



function CarregarUsuario(ID) {
   db()
      .ref('Usuario/')
      .onValue((ID) => {
         const data = snapshot.val();
         //updateStarCount(postElement, data);
         return data;
      });
}
function AlterarUsuario(id, nome, email, senha, noti) {
   db()
      .ref('/Usuario/' + id)
      .update({
         Nome: nome,
         Email: email,
         Senha: senha,
         Notificacao: noti
      })

}
function DeletarUsuario(id) {
   db().ref('/Usuario/' + { id } + '').remove();

}
export async function BuscarFeedbacks(NomePonto) {

   var Feedbacks = [];
   

   //console.log(NomePonto)
   const q = query(Feedback, where("PontoNome", "==", NomePonto));
   const querySnapshot = await getDocs(q);
   //console.log("Dentro da pagina de bancos");
   querySnapshot.forEach((feedback) => {
      {
         var F = new Object();
         F['CPF'] = feedback.data().CPF;
         F['Comentario'] = feedback.data().Comentario;
         F['Data'] = feedback.data().Data;
         F['Nome'] = feedback.data().Nome;
         F['Perigo'] = feedback.data().Perigo;
        // console.log(feedback.data().Perigo);
        // console.log(F);
         Feedbacks.push(F);
      }
   })
<<<<<<< Updated upstream
   // querySnapshot.forEach(() => {{
   //    console.log( Feedback.data().Perigo )
   //    perigoso = Feedback.data().Perigo;
   // }
   // })
   //console.log("saindo da pagina de bancos");
   //console.log(Feedbacks);

   return Feedbacks
   // if(Feedback.data().PontoNome === NomePonto){

   // } else{
=======
>>>>>>> Stashed changes

   return Feedbacks
   
}