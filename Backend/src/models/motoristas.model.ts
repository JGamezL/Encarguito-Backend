import mongoose from "mongoose";

export interface motoristas {
    id: Number;
    nombre: String;
    apellido: String;
    correo: String;
    contrasena: String;
    ordenesPendientes: [{
       idOrden: Number 
    }];
}