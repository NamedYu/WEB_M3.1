const Ubicacion = require('../modulos/ubicacion.js')
let listaUbicaciones = [
    new Ubicacion(1, 'Oficina 1', 'Descripción de la ubicación 1', ['INV-001', 'INV-002'], 'imagen1.jpg'),
    new Ubicacion(2, 'Oficina 2', 'Descripción de la ubicación 2', ['INV-003'], 'imagen2.jpg'),
    new Ubicacion(3, 'Almacén 1', 'Descripción de la ubicación 3', ['INV-004'], 'imagen3.jpg'),
    new Ubicacion(4, 'Oficina 3', 'Descripción de la ubicación 4', ['INV-005'], 'imagen4.jpg'),
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
    eliminarUbicacionPorId
};