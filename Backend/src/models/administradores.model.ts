import mongoose from 'mongoose';

export interface administradores {
    id: String;
    nombre: String;
    apellido: String;
    correo: String;
    contrasena: String;
}