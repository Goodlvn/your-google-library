const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type = String,
        reuire: true
    },
    authors: {
        type: String,
        require: true 
    },
    description: {
        type: String,
        require: true 
    },
    image: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        defalut:"",
        unique: true
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;