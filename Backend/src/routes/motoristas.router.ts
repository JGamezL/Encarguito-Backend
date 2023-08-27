import express from 'express';
import { obtenerMotoristas, crearMotorista, editarMotorista, eliminarMotorista, agregarOrdenMotorista, editarContrasenaMotorista } from '../controllers/motoristas.controller';

const router = express.Router();

//obtener todos los motoristas
router.get('/', obtenerMotoristas);

//añadir un motorista
router.post('/', crearMotorista);

//añadir orden a un motorista con push en el array
router.put('/orden', agregarOrdenMotorista);

//editar contraseña de un motorista
router.put('/contrasenaOlvidada', editarContrasenaMotorista);

//editar un motorista
router.put('/', editarMotorista);

//eliminar un motorista
router.delete('/', eliminarMotorista);

export default router;