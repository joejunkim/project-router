const express = require('express');
// const app = require('./app');

const router = express.Router();

// **
// const home = require('./app')


// router.get('/bio', (req, res) => {
//     res.send('Bio')
// })
router.get('/:id', (req, res) => {

    if (req.params.id === 'bio') {
        res.send('Bio')
    } else if (req.params.id === 'contact') {
        res.send('Contact')
    }

    // else

    // res.send(`${req.params.id}`)
})

// home.use('*', home)
// router.get('/contact', (req, res) => {
//     res.send('Contact')
// })


module.exports = router
