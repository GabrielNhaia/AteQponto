import db from '../banco/firebaseConnection';
//import Usuario from '../classes/Usuario';
//const database = firebase();


function CadastrarUsuario( nome, cpf, email, senha, noti)
{
   db()
   .ref('/Usuario/').push({
      Nome: nome, 
      CPF: cpf,
      Email : email, 
      Senha: senha, 
      Notificacao: noti
     });

   /*firebase()
  .ref('/Usuario/'+id)
  .update({
    ID :id, 
    Nome: nome, 
    CPF: cpf,
    Email : email, 
    Senha: senha, 
    Notificacao: noti
})
*/
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