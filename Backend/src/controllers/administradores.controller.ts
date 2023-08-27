import {Request, Response} from 'express';
import { administradoresSchema} from '../models/administradores.schema';
import { administradores } from '../models/administradores.model';

//obtner administrador segun correo y contrasena
export const obtenerAdministradores = (req: Request, res: Response) => {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    console.log(correo + " " + contrasena);
    administradoresSchema.findOne({correo: correo, contrasena: contrasena}).then(result => {
        if(result != null){
            res.json(result);
            console.log(result.correo + " " + result.contrasena);
        }
        else{
            res.json("no encontrado");
        }
    }).catch(error => {
        res.status(500).json(error);
    });
}

//obtner administrador segun id
export const obtenerAdministrador = (req: Request, res: Response) => {
    const id = req.body;
    console.log(id.id);
    administradoresSchema.find({id: id.id}).then(result => {
            res.json(result);
            console.log(result)
    }).catch(error => {
        res.status(500).json(error);
    });
}