const express = require('express');

const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('Hello from Express!')
})

app.all('/:id', (req, res) => {
    // console.log(req.params.id)
    let random = Math.floor(Math.random() * 100)

    res.render("index", { method: `${req.method}`, path: `${req.path}`, random_number: `${random}` })

})

const port = 8081

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})

