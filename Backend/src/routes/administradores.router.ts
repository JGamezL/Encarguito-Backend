import express from 'express';
import { obtenerAdministradores, obtenerAdministrador } from '../controllers/administradores.controller';

const router = express.Router();

//iniciar sesion encontrando el usuario
router.post('/login', obtenerAdministradores);

//obtener administrador
router.post('/', obtenerAdministrador);


export default router;