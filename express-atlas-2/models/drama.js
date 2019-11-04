const mongoose = require('mongoose')

const dramaSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    jumlah_episode: {
        type: String,
        required: true
    },
    pemain: {
        type: String,
        required: true
    },
    sinopsis: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Drama', dramaSchema)