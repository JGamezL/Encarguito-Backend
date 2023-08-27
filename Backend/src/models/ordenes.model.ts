import mongoose from "mongoose";

export interface ordenes extends mongoose.Document {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    descripcion: string;
    direccion: string;
    estado: string;
    fecha: string;
    precio: string;
    hora: string;
    productos: [{
        idProducto: number,
    }];
}