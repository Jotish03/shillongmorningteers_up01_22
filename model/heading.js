const mongoose = require('mongoose')
const headingSchema = mongoose.Schema({
    heading:{ type: String}
})
module.exports = mongoose.model('heading', headingSchema)