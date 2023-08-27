import mongoose from 'mongoose';
import { usuarios } from './usuarios.model';

const usuarioSchema = new mongoose.Schema<usuarios>({
    id: Number,
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    telefono: String,
    direccion: String,
    productosCarrito: [{
        idProducto: Number,
    }],
    ordenes: [{
        idOrden: Number,
    }],
});

export const usuariosSchema = mongoose.model<usuarios>('usuarios', usuarioSchema);