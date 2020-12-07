import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { useBookContext } from "../utils/BookContext";
import BookDisplay from "./BookDisplay";

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
        margin: 0,
        paddingTop: "15px",
        paddingLeft: "15px",
    }
}));

export default function Library() {
    const { state: { savedBooks }, dispatch } = useBookContext();
    const classes = useStyles();
    useEffect(() => {
        loadSavedBooks();
    }, [])

    async function loadSavedBooks() {
        const { data } = await API.getBooks();
        dispatch({ type: Actions.GET_SAVED_BOOKS, payload: data });
    }

    const displayBookResults = savedBooks.map((book, index) => {
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
            image={book.image}
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
                    Saved Books
                </Typography>
                {displayBookResults}
            </div>
        </Paper>
    );
}