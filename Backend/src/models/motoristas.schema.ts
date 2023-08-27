import mongoose from 'mongoose';
import { motoristas } from './motoristas.model';

const motoristaSchema = new mongoose.Schema<motoristas>({
    id: Number,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    ordenesPendientes: [{
       idOrden: Number 
    }],
});

export const motoristasSchema = mongoose.model<motoristas>('motoristas', motoristaSchema);

