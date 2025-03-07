// start code

import express from 'express';
const router = express.Router();

// var globale posts

let postsList = [

    {
        titolo: "Ricetta 1",
        contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
        immagine: "imgs/ciambellone.jpeg",
        tags: ["ricetta", "dolce", "ciambellone"]
    },
    {
        titolo: "Ricetta 2",
        contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
        immagine: "imgs/cracker_barbabietola.jpeg",
        tags: ["ricetta", "salato", "barbabietola"]
    },
    {
        titolo: "Ricetta 3",
        contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
        immagine: "imgs/pane_fritto_dolce.jpeg",
        tags: ["ricetta", "dolce", "pane"]
    },
    {
        titolo: "Ricetta 4",
        contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
        immagine: "imgs/pasta_barbabietola.jpeg",
        tags: ["ricetta", "pasta", "barbabietola"]
    },
    {
        titolo: "Ricetta 5",
        contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
        immagine: "imgs/torta_paesana.jpeg",
        tags: ["ricetta", "dolce", "torta"]
    },
];

// route bacheca per elenco post
router.get('/bacheca', (req, res) => {

    res.json("elenco dei post");

})

// route bacheca per estrarre singolo post
router.get('/bacheca/:id', (req, res) => {

    // let extractedPost = postsList.find( post => post.titolo === req.params.id) ;

    let extractedId = parseInt(req.params.id) - 1;
    console.log(extractedId)

    let extractedPost = postsList.find( (post) => postsList.indexOf(post) === extractedId );
    console.log(extractedPost)

    res.json(extractedPost);

})


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

// end code