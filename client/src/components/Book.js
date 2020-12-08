import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import SavedButton from "./SavedButton";
import BuyButton from "./BuyButton";
import { useBookContext } from "../utils/BookContext";
import Actions from "../utils/Actions";
import API from "../utils/API";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        minHeight: "350px",
        width: "75%",
        margin: "0 auto",
        marginTop: "50px",
        marginBottom: "50px",
        backgroundColor: "#3f51b5"
    },
    content: {
        display: "block",
        padding: "25px",
        textAlign: "center",
        color: "white"
    },
    image: {
        height: "250px",
        float: "left"
    },
    buttons: {
        float: "right",
        marginLeft: 8
    }
}));

export default function Book() {
    const classes = useStyles();
    const { state: { bookDetails }, dispatch } = useBookContext();

    if (bookDetails.title) {
        localStorage.setItem("book-view", JSON.stringify(bookDetails));
    }

    useEffect(() => {
        const data = localStorage.getItem("book-view");

        if (data) {
            const newData = JSON.parse(data)
            dispatch({ type: Actions.VIEW_DETAILS, payload: newData });
        }

    }, [])

    let authorsString;

    if (bookDetails.authors) {
        bookDetails.authors.forEach((author, index) => {

            index === 0 ? authorsString = author :
                authorsString += ", " + author
        })
    }

    async function saveBook(e) {

        if (!bookDetails.split) {
            let addBook = {
                bookID: bookDetails.bookID,
                title: bookDetails.title,
                authors: bookDetails.authors,
                description: bookDetails.description,
                image: bookDetails.image,
                link: bookDetails.link,
            }

            const { data } = await API.saveBook(addBook);

            if (data) {
                dispatch({ type: Actions.SAVE_BOOK, payload: data })
                dispatch({ type: Actions.VIEW_DETAILS, payload: { ...bookDetails, split: true } })
            }

        } else {
            const { data } = await API.deleteBook(bookDetails.bookID);

            if (data) {
                dispatch({ type: Actions.DELETE_BOOK, payload: bookDetails.bookID })
                dispatch({ type: Actions.VIEW_DETAILS, payload: { ...bookDetails, split: false } })
            }
        }
    }

    return (

        <Paper elevation={3} className={classes.root}>
            <div className={classes.content}>
                <SavedButton className={classes.buttons} onClick={saveBook} split={bookDetails.split} />
                <a href={bookDetails.link} target="_blank">
                    <BuyButton className={classes.buttons} />
                </a>
                {bookDetails?.image ? <img className={classes.image} src={bookDetails?.image} alt={bookDetails.title} style={{ marginRight: 15 }} /> : <img src="https://via.placeholder.com/150" alt="book cover" />}
                <div style={{ textAlign: "left" }}>
                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                        <Typography variant="h4" component="h2">
                            {bookDetails.title}
                        </Typography>
                        <Typography variant="h5" component="h2" style={{ marginLeft: "15px", marginRight: "15px" }} >
                            •
                         </Typography>
                        <Typography style={{ fontStyle: "italic" }} >
                            {authorsString === undefined ? "No Author Information is available" : authorsString}
                        </Typography>
                    </div>
                    <Typography>
                        {}
                        {bookDetails.description ? bookDetails.description : "No description available"}
                    </Typography>
                </div>
            </div>
        </Paper>
    );
}