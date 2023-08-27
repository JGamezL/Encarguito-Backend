import mongoose from "mongoose";

export class Database {
  server:string = 'localhost';
  port:string = '27017';
  db:string = 'encarguito';

  constructor() {
    // Cadena de conexión
    mongoose.connect(`mongodb+srv://joelrrr2002:admin@cluster0.xkyynul.mongodb.net/${this.db}`)
    .then(()=>{
      console.log('Se conectó a Mongo');
    }).catch((error) => {
      console.error('Ocurrió un error al conectarse', error);
    });
  }
}