const express = require('express');
const router = express.Router();
const Drama = require('../models/drama');
const helper = require('../routes/helper')

//List all drama
router.get('/', async (req, res) => {
    try {
        const dramas = await Drama.find()
        res.json(dramas)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//post a new drama
router.post('/', async (req, res) => {
    const drama = new Drama ({
        judul: req.body.judul,
        jumlah_episode: req.body.jumlah_episode,
        pemain: req.body.pemain,
        sinopsis: req.body.sinopsis
    })
    try {
        await drama.save()
        res.status(200).json({drama})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

//List a drama
router.get('/:id', helper, (req, res) => {
    res.json(res.drama)
})

//Delete a drama
router.delete('/:id', helper, async (req, res) => {
    try {
        await res.drama.remove()
        res.json({message: 'Drama is deleted'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Update a drama
// router.patch('/:id', helper, async (req, res) => {
//     if (req.body.pemain != null) {
//         req.drama.pemain = req.body.pemain
//     }
//     try {
//         const updateSinopsis = await res.drama.save()
//         res.json({updateSinopsis})
//     } catch (err) {
//         res.status(400).json({message: err.message})
//     }
// })

module.exports = router