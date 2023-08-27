import {Request, Response} from 'express';
import { ordenesSchema } from '../models/ordenes.schema';


//obtener todas las ordenes
export const obtenerOrdenes = (req: Request, res: Response) => {
    ordenesSchema.find().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//añadir una orden
export const crearOrden = (req: Request, res: Response) => {
    console.log(req.body);
    const orden = new ordenesSchema(req.body);
    orden.save().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//editar una orden
export const editarOrden = (req: Request, res: Response) => {
    const orden = new ordenesSchema(req.body);

    console.log(orden);
    ordenesSchema.findOneAndUpdate({id: orden.id}, {nombre: orden.nombre, apellido: orden.apellido, telefono: orden.telefono, descripcion: orden.descripcion, direccion: orden.direccion, estado: orden.estado, fecha: orden.fecha, hora: orden.hora, productos: orden.productos}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//eliminar una orden
export const eliminarOrden = (req: Request, res: Response) => {
    const orden = new ordenesSchema(req.body);
    console.log(orden);
    ordenesSchema.findOneAndDelete({id: orden.id}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//obtener una orden
export const obtenerOrden = (req: Request, res: Response) => {
    const orden = new ordenesSchema(req.body);
    console.log(orden);
    ordenesSchema.findOne({id: orden.id}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//obtener una orden por estado
export const obtenerOrdenesPorEstado = (req: Request, res: Response) => {
    const orden = new ordenesSchema(req.body);
    console.log(orden);
    ordenesSchema.find({estado: orden.estado}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}