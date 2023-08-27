import express from 'express';
import { obtenerProductos, crearProducto, editarProducto, eliminarProducto } from '../controllers/productos.controller';

const router = express.Router();

//obtener todos los productos
router.get('/', obtenerProductos);

//añadir un producto
router.post('/', crearProducto);

//editar un producto
router.put('/', editarProducto);

//eliminar un producto
router.delete('/', eliminarProducto);

export default router;