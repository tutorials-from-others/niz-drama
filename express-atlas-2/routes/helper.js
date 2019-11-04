const Drama = require('../models/drama')

async function getDrama(req, res, next) {
    try {
        drama = await Drama.findById(req.params.id)
        if (drama == null) {
            return res.status(404).json({message: 'Drama is not found'})
        } 
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.drama = drama
    next()
}

module.exports = getDrama