import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, withTheme } from '@material-ui/core';
import { useBookContext } from "../utils/BookContext";
import BookDisplay from "./BookDisplay";
import { lightGreen } from '@material-ui/core/colors';
import API from "../utils/API";
import Actions from "../utils/Actions";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        minHeight: "250px",
        width: "75%",
        margin: "0 auto",
        marginTop: "50px",
        backgroundColor: "#3f51b5",
        marginBottom: "75px",
        paddingBottom: "25px"
    },
    content: {
        display: "block",
        textAlign: "left",
        color: "white"
    },
    label: {
        display: "block",
        paddingTop: 20,
        marginLeft: 20
    }
}));

export default function SearchResults() {
    const { state: { searchResults, savedBooks }, dispatch } = useBookContext();
    const classes = useStyles();


    useEffect(() => {
        loadSavedBooks();
    }, [])

    async function loadSavedBooks() {
        const { data } = await API.getBooks();
        dispatch({ type: Actions.GET_SAVED_BOOKS, payload: data });
    }

    console.log(savedBooks);

    const displayBookResults = searchResults && searchResults.map((book, index) => {
        //otherwise the split is defaulted into flase
        let split = false;
        //if the book id matches the a book with the same ID in state then we have to change the split to true
        savedBooks.forEach(savedBook => {
            if (savedBook.bookID === book.bookID) {
                split = true;
            }
        })

        return <BookDisplay
            key={index}
            bookID={book.bookID}
            image={book?.imageLinks?.smallThumbnail}
            title={book.title}
            authors={book.authors}
            description={book.description}
            link={book.previewLink}
            split={split}
        />
    })

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.content}>
                <Typography className={classes.label}>
                    Search Results
                </Typography>
                {searchResults && displayBookResults}
            </div>
        </Paper>
    );
}