import mongoose from "mongoose";
import { productos } from "./productos.model"

const productoSchema = new mongoose.Schema<productos>({
    id: Number,
    empresa: String,
    inventario: Number,
    nombre: String,
    precio: Number,
    detalle: String,
});

export const productosSchema = mongoose.model<productos>('productos', productoSchema);