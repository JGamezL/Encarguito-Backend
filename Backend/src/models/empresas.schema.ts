import mongoose from "mongoose";
import { empresas } from "./empresas.model";

const empresaSchema = new mongoose.Schema<empresas>({
    id: Number,
    nombreEmpresa: String,
    nombreContacto: String,
    telefono: String,
    direccion: String,
});

export const empresasSchema = mongoose.model<empresas>('empresas', empresaSchema);
