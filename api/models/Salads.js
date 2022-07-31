const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaladSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

const Salad = mongoose.model('Salad', SaladSchema);
module.exports = Salad; 