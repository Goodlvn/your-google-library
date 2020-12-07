const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookID: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    authors: [{
        type: String,
        default: "no author information availible",
        require: true
    }],
    description: {
        type: String,
        default: "no description",
        require: true
    },
    image: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        defalut: "",
        unique: true
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;