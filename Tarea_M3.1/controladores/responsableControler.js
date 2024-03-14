const Responsable = require('../modulos/responsable.js');
let listaResponsables = [
    new Responsable(1, '123', 'Juan Pérez', ['INV-001', 'INV-002'], 'imagen1.jpg'),
    new Responsable(2, '456', 'María López', ['INV-003'], 'imagen2.jpg'),
    new Responsable(3, '789', 'Pedro García', ['INV-004'], 'imagen3.jpg'),
    new Responsable(4, '012', 'Ana Martínez', ['INV-005'], 'imagen4.jpg'),
];

const mostrar = (req, res) => {
    res.json(listaResponsables);
};

const buscarResponsablePorId = (req, res) => {
    if (listaResponsables.findIndex(responsable => responsable.id == parseInt(req.params.id))!=-1) {
        res.json(listaResponsables.find(responsable => responsable.id == parseInt(req.params.id)));
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};
const buscarResponsablePorNumeroEmpleado = (req, res) => {
    if (listaResponsables.findIndex(responsable => responsable.numeroEmpleado === req.params.numem)!=-1) {
        res.json(listaResponsables.find(responsable => responsable.numeroEmpleado === req.params.numem));
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};
const eliminarResponsablePorId = (req, res) => {
    const index = listaResponsables.findIndex(responsable => responsable.id === parseInt(req.params.id));
    if (index !== -1) {
        listaResponsables.splice(index, 1);
        res.json(listaResponsables);
    } else {
        res.status(404).json({ error: 'Responsable no encontrado' });
    }
};

module.exports = {
    mostrar,
    buscarResponsablePorId,
    buscarResponsablePorNumeroEmpleado,
    eliminarResponsablePorId
};
