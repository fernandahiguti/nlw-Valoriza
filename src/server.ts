import express, { response } from "express";

//@types/express
const app = express();
/*
* GET => Buscar uma informação
* POST => Inserir (ou criar) uma informação
* PUT => Alterar uma informação
* DELETE => Remover um dado
* PATCH => Alterar uma informação específica
*/

app.get('/test', (req, res) => {
  //request => entrando
  //response => saindo
  return res.send("Hello, World");
})

app.post("/test/post", (req, res) =>{
  return res.send("testing post");
})

//http://localhost:3000
app.listen(3000, () => console.log('Server is running'))
