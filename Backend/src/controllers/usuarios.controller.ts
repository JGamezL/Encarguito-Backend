import {Request, Response} from 'express';
import { usuariosSchema } from '../models/usuarios.schema';


//obtener todos los usuarios
export const obtenerUsuarios = (req: Request, res: Response) => {
    usuariosSchema.find().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//obtener usuario segun correo y contrasena
export const obtenerUsuario = (req: Request, res: Response) => {
    const correo = req.body.correo;
    const contrasena = req.body.contrasena;
    console.log(req.body);
    usuariosSchema.findOne({correo: correo, contrasena: contrasena}).then(result => {
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

//obtener usuario segun id
export const obtenerUsuarioPorId = (req: Request, res: Response) => {
    const id = req.body;
    console.log(id.id);
    usuariosSchema.find({id: id.id}).then(result => {
            res.json(result);
            console.log(result)
    }).catch(error => {
        res.status(500).json(error);
    });
}

//añadir un usuario
export const crearUsuario = (req: Request, res: Response) => {
    console.log(req.body);
    const usuario = new usuariosSchema(req.body);
    usuario.save().then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//editar contraseña de un usuario
export const editarContrasena = (req: Request, res: Response) => {
    const usuario = new usuariosSchema(req.body);

    console.log(usuario);
    usuariosSchema.findOneAndUpdate({id: usuario.id}, {contrasena: usuario.contrasena}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//editar un usuario
export const editarUsuario = (req: Request, res: Response) => {
    const usuario = new usuariosSchema(req.body);

    console.log(usuario);
    usuariosSchema.findOneAndUpdate({id: usuario.id}, {nombre: usuario.nombre, correo: usuario.correo, apellido: usuario.apellido, telefono: usuario.telefono, direccion: usuario.direccion}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//eliminar un usuario
export const eliminarUsuario = (req: Request, res: Response) => {
    const usuario = new usuariosSchema(req.body);
    console.log(usuario);
    usuariosSchema.findOneAndDelete({id: usuario.id}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//anade un producto al carrito de un usuario POST
export const anadirProductoCarrito = (req: Request, res: Response) => {
    const usuario = new usuariosSchema(req.body);
    console.log(usuario);
    usuariosSchema.findOneAndUpdate({id: usuario.id}, {$push: {productosCarrito: usuario.productosCarrito}}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//elimina todos los productos del carrito de un usuario DELETE
export const eliminarProductosCarrito = (req: Request, res: Response) => {
    const usuario = new usuariosSchema(req.body);
    console.log(usuario);
    usuariosSchema.findOneAndUpdate({id: usuario.id}, {productosCarrito: []}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//agregar orden a un usuario
export const agregarOrden = (req: Request, res: Response) => {
    const usuario = new usuariosSchema(req.body);
    console.log(usuario);
    usuariosSchema.findOneAndUpdate({id: usuario.id}, {$push: {ordenes: usuario.ordenes}}).then(result => {
        res.json(result);
    }).catch(error => {
        res.status(500).json(error);
    });
}

//eliminar ordenes que coincidan con el idOrden de las ordenes de un usuario
export const eliminarOrden = (req: Request, res: Response) => {
    const { idUsuario, idOrden } = req.body;
    usuariosSchema.findOneAndUpdate(
        { id: idUsuario },
        { $pull: { ordenes: { idOrden: idOrden} } }
    )
    .then(result => {
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
}
