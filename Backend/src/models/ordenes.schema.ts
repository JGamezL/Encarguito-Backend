import mongoose from "mongoose";
import { ordenes } from "./ordenes.model";
import e from "express";

const ordenSchema = new mongoose.Schema<ordenes>({
    id: Number,
    nombre: String,
    apellido: String,
    telefono: String,
    descripcion: String,
    direccion: String,
    estado: String,
    fecha: String,
    precio: String,
    hora: String,
    productos: [{
        idProducto: Number,
    }],
});

export const ordenesSchema = mongoose.model<ordenes>('ordenes', ordenSchema);