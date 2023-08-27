import express from 'express';
import { obtenerUsuarios, obtenerUsuario, crearUsuario, editarUsuario, 
    editarContrasena, eliminarUsuario, obtenerUsuarioPorId, anadirProductoCarrito, 
    eliminarProductosCarrito, agregarOrden, eliminarOrden } from '../controllers/usuarios.controller';

const router = express.Router();

//obtener todos los usuarios
router.get('/', obtenerUsuarios);

//obtener todos los usuarios
router.post('/login', obtenerUsuario);

//añadir un usuario
router.post('/registro', crearUsuario);

//editar un usuario
router.put('/', editarUsuario);

//editar contraseña de un usuario
router.put('/contrasena', editarContrasena);

//eliminar un usuario
router.delete('/', eliminarUsuario);

//obtener un usuario
router.post('/usuario', obtenerUsuarioPorId);

//añadir un producto al carrito
router.put('/carrito', anadirProductoCarrito);

//eliminar todos los productos del carrito
router.delete('/carrito', eliminarProductosCarrito);

//agregar una orden
router.put('/orden', agregarOrden);

//eliminar una orden
router.delete('/orden', eliminarOrden);

export default router;