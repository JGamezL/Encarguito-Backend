import express from 'express';
import { obtenerOrdenes, crearOrden, editarOrden, eliminarOrden, obtenerOrden, obtenerOrdenesPorEstado } from '../controllers/ordenes.controller';

const router = express.Router();

//obtener todas las ordenes
router.get('/', obtenerOrdenes);

//añadir una orden
router.post('/', crearOrden);

//editar una orden
router.put('/', editarOrden);

//eliminar una orden
router.delete('/', eliminarOrden);

//obtener una orden
router.post('/orden', obtenerOrden);

//obtener una orden por estado
router.post('/estado', obtenerOrdenesPorEstado);

export default router;