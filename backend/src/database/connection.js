const mongoose = require('mongoose')

const url = "mongodb+srv://tomate:tomate@databasestore.yjrb0x6.mongodb.net/teste?retryWrites=true&w=majority"
const connect = ()=>{
  mongoose.connect(url)
  const connection = mongoose.connection;
  connection.on("error",()=>{
    console.log("erro ao conectar no banco")
  })
  connection.on("open",()=>{
    console.log("conectado ao banco")
  })
}
connect()