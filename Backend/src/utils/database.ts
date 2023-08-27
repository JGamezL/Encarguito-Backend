import mongoose from "mongoose";

export class Database {
  server:string = 'localhost';
  port:string = '27017';
  db:string = 'encarguito';

  constructor() {
    // Cadena de conexión
    mongoose.connect(`mongodb://localhost:27017/${this.db}`)
    .then(()=>{
      console.log('Se conectó a Mongo');
    }).catch((error) => {
      console.error('Ocurrió un error al conectarse', error);
    });
  }
}