import express from 'express';
import { obtenerEmpresas, crearEmpresa, editarEmpresa, eliminarEmpresa } from '../controllers/empresas.controller';

const router = express.Router();

//obtener todas las empresas
router.get('/', obtenerEmpresas);

//añadir una empresa
router.post('/', crearEmpresa);

//editar una empresa
router.put('/', editarEmpresa);

//eliminar una empresa
router.delete('/', eliminarEmpresa);

export default router;