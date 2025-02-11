// express

import express from 'express';
const app = express();
const port = 3000;

//import router
import postsRouter from './routers/posts.js';

// use routers
app.use('/posts', postsRouter);

// use public
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server root');

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});