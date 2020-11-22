const router = require("express").Router();
const Book = require("../models/book");

router.get("/books", async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (err) {
        res.status(422).json(err);
    }
})

router.post("/books", async (req, res) => {
    try {
        const addBook = req.body;
        const bookInfo = await new Book(addBook).save();
        res.json(bookInfo);
    } catch (err) {
        res.status(422).json(err);
    }
})

router.delete("/books/:id", async (req, res) => {
    try {
        const bookId = req.params.id;
        const deletedBook = await Book.deleteOne({ googleId: bookId });
        res.json(deletedBook)
    } catch (err) {
        res.status(422).json(err);
    }
})

module.exports = router;