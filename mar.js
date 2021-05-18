const express = require('express');
// const app = require('./app');

const router = express.Router();

// **
// const home = require('./app')


// router.get('/bio', (req, res) => {
//     res.send('Bio')
// })
router.get('/', (req, res) => {
    res.send('margot home')
})


router.get('/:id', (req, res) => {

    if (req.params.id === 'bio') {
        res.send('Bio')
    } else if (req.params.id === 'contact') {
        res.send('Contact')
    } else {
        res.redirect('/margot')
    }

    // else

    // res.send(`${req.params.id}`)
})


module.exports = router
