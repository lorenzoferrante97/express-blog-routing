// start code

import express from 'express';
const router = express.Router();

// READ -> index
router.get('/', (req, res) => {

    res.send("Lista di tutti i post");

})

// READ -> show
router.get('/:id', (req, res) => {

    res.send(`Estrazione del post con id ${req.params.id}`);

})

// CREATE -> store
router.post('/', (req, res) => {

    res.send("Creazione di un post");

})

// UPDATE -> update
router.put('/:id', (req, res) => {

    res.send(`Aggiornamento di tutte le info del post con id ${req.params.id}`);

})

// UPDATE -> modify
router.patch('/:id', (req, res) => {

    res.send(`Aggiornamento di una singola info del post con id ${req.params.id}`);

})

// DELETE -> destroy
router.delete('/:id', (req, res) => {

    res.send(`Eliminazione del post con id ${req.params.id}`);

})

export default router;