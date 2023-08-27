import {Request, Response} from 'express';
import { motoristasSchema } from '../models/motoristas.schema';
import router from '../routes/motoristas.router';

//obtener todos los motoristas
export const obtenerMotoristas = (req: Request, res: Response) => {
    motoristasSchema.find().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//añadir un motorista
export const crearMotorista = (req: Request, res: Response) => {
    console.log(req.body);
    const motorista = new motoristasSchema(req.body);
    motorista.save().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//añadir orden a un motorista con push en el array
export const agregarOrdenMotorista = (req: Request, res: Response) => {
    const motorista = new motoristasSchema(req.body);
    motoristasSchema.findOneAndUpdate({id: motorista.id}, {$push: {ordenPendiente: motorista.ordenesPendientes}}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//editar un motorista
export const editarMotorista = (req: Request, res: Response) => {
    const motorista = new motoristasSchema(req.body);

    console.log(motorista);
    motoristasSchema.findOneAndUpdate({id: motorista.id}, {nombre: motorista.nombre, apellido: motorista.apellido, correo: motorista.correo}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//editar contraseña de un motorista
export const editarContrasenaMotorista = (req: Request, res: Response) => {
    const motorista = new motoristasSchema(req.body);

    console.log(motorista);
    motoristasSchema.findOneAndUpdate({correo: motorista.correo}, {contrasena: motorista.contrasena}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//eliminar un motorista
export const eliminarMotorista = (req: Request, res: Response) => {
    const motorista = new motoristasSchema(req.body);
    console.log(motorista);
    motoristasSchema.findOneAndDelete({id: motorista.id}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}
