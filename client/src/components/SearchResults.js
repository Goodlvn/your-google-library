import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, withTheme } from '@material-ui/core';
import { useBookContext } from "../utils/BookContext";
import BookDisplay from "./BookDisplay";

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
    const { state: { searchResults } } = useBookContext();
    const classes = useStyles();

    console.log(searchResults);

    const displayBookResults = searchResults && searchResults.map((book, index) => {
        return <BookDisplay
            key={index}
            image={book?.imageLinks?.smallThumbnail}
            title={book.title}
            description={book.description}
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