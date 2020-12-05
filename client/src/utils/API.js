import axios from "axios";

export default {
    searchTitle: (title) => {
        return axios.get("/google/?title=" + title);
    },
    saveBook: (book) => {
        return axios.post("/api/books", book);
    },
    getBooks: () => {
        return axios.get("/api/books");
    },
    deleteBook: (bookId) => {
        return axios.delete("/api/books/" + bookId);
    }
};