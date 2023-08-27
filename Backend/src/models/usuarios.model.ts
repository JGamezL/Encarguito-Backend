import mongoose from "mongoose";

export interface usuarios extends mongoose.Document {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
    telefono: string;
    direccion: string;
    productosCarrito: [{
        idProducto: number,
    }];
    ordenes: [{
        idOrden: number,
    }];
}