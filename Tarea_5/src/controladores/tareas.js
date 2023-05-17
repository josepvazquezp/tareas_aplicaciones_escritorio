const Tarea = require('./../modelos/tarea');

const TareasController = {
    crear: (req, res) => {
        let newTarea = {
            titulo: req.body.titulo, 
            descripcion: req.body.descripcion, 
            status: req.body.status, 
            fecha: Date.now()
        };

        Tarea(newTarea).save()
                        .then(tarea => {
                            res.status(201).send(tarea);
                        })
                        .catch(error => {
                            res.status(400).send('No se pudo crear la tarea');
                        });
    },

    actualizar: (req, res) => {
        const id = req.params.id;

        let updateUser = {
            titulo: req.body.titulo, 
            descripcion: req.body.descripcion, 
            status: 'actualizado'
        }

        Tarea.findByIdAndUpdate(id, updateUser, {new:true})
                                .then(tarea => {
                                    res.status(200).send(tarea);
                                })
                                .catch(error => {
                                    res.status(400).send('Algo salio mal');
                                });
    },
    
    listar: (req, res) => {
        Tarea.find({})
                .then(tareas => {
                    res.status(200).send(tareas);
                })
                .catch(error => {
                    res.status(400).send('Algo salio mal');
                });
    },
    
    ver: (req, res) => {
        const id = req.params.id;
        Tarea.findById(id)
                .then(tarea => {
                    res.status(200).send(tarea);
                })
                .catch(error => {
                    res.status(400).send('No se encontro la tarea: ' + id);
                });
    },

    borrar: (req, res) => {
        const id = req.params.id;
        Tarea.findByIdAndDelete(id)
                                .then(tarea => {
                                    res.status(200).send(tarea);
                                })
                                .catch(error => {
                                    res.status(400).send('No se encontro la tarea: ' + id);
                                });
    }
}

module.exports = TareasController;