import mongoose from "mongoose";

export interface productos extends mongoose.Document {
    id: number;
    empresa: String
    inventario: number;
    nombre: string;
    precio: number;
    detalle: string;
}
