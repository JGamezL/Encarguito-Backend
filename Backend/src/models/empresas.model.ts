import mongoose from "mongoose";

export interface empresas {
    id: Number;
    nombreEmpresa: String;
    nombreContacto: String;
    telefono: String;
    direccion: String;
}