const express = require('express');

const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('Hello from Express!')
})

app.get(/(xyz)$/, (req, res) => {
    res.send("That's all I wrote.")
})

// app.get(/^(/capital-letters/)/, (req, res) => {
//     res.send('test')
//     // res.send.toUpperCase(req.params.id)
// })
app.get('/capital-letters/:id', (req, res) => {
    // const id = req.params.id
    // res.send(id.toUpperCase())
    res.send(req.params.id.toUpperCase())
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
