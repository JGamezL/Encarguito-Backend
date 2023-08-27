import mongoose from 'mongoose';
import { administradores } from './administradores.model';

const administradorSchema = new mongoose.Schema<administradores>({
    id: String,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
});

export const administradoresSchema = mongoose.model<administradores>('administradores', administradorSchema);