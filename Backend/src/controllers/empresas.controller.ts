import {Request, Response} from 'express';
import { empresasSchema } from '../models/empresas.schema';


//obtener todas las empresas
export const obtenerEmpresas = (req: Request, res: Response) => {
    empresasSchema.find().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//añaadir una empresa
export const crearEmpresa = (req: Request, res: Response) => {
    console.log(req.body);
    const empresa = new empresasSchema(req.body);
    empresa.save().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//editar una empresa
export const editarEmpresa = (req: Request, res: Response) => {
    const empresa = new empresasSchema(req.body);

    console.log(empresa);
    empresasSchema.findOneAndUpdate({id: empresa.id}, {nombreEmpresa: empresa.nombreEmpresa, nombreContacto: empresa.nombreContacto, telefono: empresa.telefono, direccion: empresa.direccion}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//eliminar una empresa
export const eliminarEmpresa = (req: Request, res: Response) => {
    const empresa = new empresasSchema(req.body);
    console.log(empresa);
    empresasSchema.findOneAndDelete({id: empresa.id}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}