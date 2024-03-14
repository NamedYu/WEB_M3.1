const Ubicacion = require('../modulos/ubicacion.js')
let listaUbicaciones = [
    new Ubicacion(1, 'Oficina 1', 'Descripción de la ubicación 1', ['INV-001', 'INV-002'], 'https://picsum.photos/900/675'),
    new Ubicacion(2, 'Oficina 2', 'Descripción de la ubicación 2', ['INV-003'], 'https://picsum.photos/900/675'),
    new Ubicacion(3, 'Almacén 1', 'Descripción de la ubicación 3', ['INV-004'], 'https://picsum.photos/900/675'),
    new Ubicacion(4, 'Oficina 3', 'Descripción de la ubicación 4', ['INV-005'], 'https://picsum.photos/900/675'),
];

const mostrar = (req, res) => {
    res.json(listaUbicaciones);
};

const buscarUbicacionPorId = (req, res) => {
    if (listaUbicaciones.findIndex(ubicacion => ubicacion.id == parseInt(req.params.id))!=-1) {
        res.json(listaUbicaciones.find(ubicacion => ubicacion.id == parseInt(req.params.id)));
    } else {
        res.status(404).json({ error: 'Ubicación no encontrada' });
    }
};
const agregarNuevaUbicacion = (req, res) => {
    const { id,descripcion, activosAsociados, imagen } = req.body;
    if(listaUbicaciones.findIndex(ubicacion => ubicacion.id == id)!=-1){
        res.status(404).send("ID repetida");
    }else{
        const nuevaUbicacion = new Ubicacion(id, descripcion, activosAsociados, imagen);
        listaUbicaciones.push(nuevaUbicacion);
        res.status(201).json(nuevaUbicacion);
    }
};
const actualizarUbicacion = (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaUbicaciones.findIndex(ubicacion => ubicacion.id === id);
    if (index !== -1) {
        const { id,descripcion, activosAsociados, imagen } = req.body;
        if(listaUbicaciones.findIndex(ubicacion => ubicacion.id == id)!=-1){
            res.status(404).send("ID repetida");
        }else{
            const ubicacionActualizada = {
                id:id || listaUbicaciones[index].id,
                descripcion: descripcion || listaUbicaciones[index].descripcion,
                activosAsociados: activosAsociados || listaUbicaciones[index].activosAsociados,
                imagen: imagen || listaUbicaciones[index].imagen
            };
            listaUbicaciones[index] = ubicacionActualizada;
            res.json(listaUbicaciones);
        }
    } else {
        res.status(404).json({ error: 'Ubicación no encontrada' });
    }
};
const updateUbicacion = (req, res) => {
    const id = parseInt(req.params.id);
    const index = listaUbicaciones.findIndex(ubicacion => ubicacion.id === id);
    if (index !== -1) {
        const ubicacionActual = listaUbicaciones[index];
        const { id, descripcion, imagen } = req.body;
        if (id) {
            if (listaUbicaciones.findIndex(ubicacion => ubicacion.id == id) !== -1) {
                res.status(401).send("ID repetida");
            } else {
                ubicacionActual.id = id;
            }
        }
        if (descripcion) ubicacionActual.descripcion = descripcion;
        if (imagen) ubicacionActual.imagen = imagen;

        listaUbicaciones[index] = ubicacionActual;
        res.json(listaUbicaciones);
    } else {
        res.status(404).json({ error: 'Ubicación no encontrada' });
    }
};
const eliminarUbicacionPorId = (req, res) => {
    const index = listaUbicaciones.findIndex(ubicacion => ubicacion.id == parseInt(req.params.id));
    if (index!=-1) {
        listaUbicaciones.splice(index, 1);
        res.json(listaUbicaciones);
    } else {
        res.status(404).json({ error: 'Ubicación no encontrada' });
    }
};

module.exports = {
    mostrar,
    buscarUbicacionPorId,
    eliminarUbicacionPorId,
    agregarNuevaUbicacion,
    actualizarUbicacion,
    updateUbicacion
};