const express = require('express');

const app = express();
// const home = express.Router();
const marRouter = require('./mar')
// console.log(marRouter)
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.send('Hello from Express!')
})


app.use('/marg\(ot\|eaux\)', marRouter)


app.get(/(xyz)$/, (req, res) => {
    res.send("That's all I wrote.")
})

app.get('/capital-letters/:id', (req, res) => {
    res.send(req.params.id.toUpperCase())
})

app.all('/:id', (req, res) => {
    let random = Math.floor(Math.random() * 100)

    res.render("index", { method: `${req.method}`, path: `${req.path}`, random_number: `${random}` })
})

const port = 8081

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})



