import {Request, Response} from 'express';
import { productosSchema } from '../models/productos.schema';


//obtener todos los productos
export const obtenerProductos = (req: Request, res: Response) => {
    productosSchema.find().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//añadir un producto
export const crearProducto = (req: Request, res: Response) => {
    console.log(req.body);
    const producto = new productosSchema(req.body);
    producto.save().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//editar un producto
export const editarProducto = (req: Request, res: Response) => {
    const producto = new productosSchema(req.body);

    console.log(producto);
    productosSchema.findOneAndUpdate({id: producto.id}, {inventario: producto.inventario, nombre: producto.nombre, precio: producto.precio, detalle: producto.detalle}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//eliminar un producto
export const eliminarProducto = (req: Request, res: Response) => {
    const producto = new productosSchema(req.body);
    console.log(producto);
    productosSchema.findOneAndDelete({id: producto.id}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}