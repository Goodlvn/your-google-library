import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { useBookContext } from "../utils/BookContext";
import Actions from "../utils/Actions";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "350px",
        width: "75%",
        margin: "0 auto",
        marginTop: "50px",
        backgroundColor: "#3f51b5"
    },
    content: {
        display: "block",
        padding: "25px",
        textAlign: "center",
        color: "white"
    },
    image: {
        float: "left"
    }
}));

export default function SavedBanner() {
    const classes = useStyles();
    const { state: { bookDetails }, dispatch } = useBookContext();

    console.log(bookDetails);

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

    return (

        <Paper elevation={3} className={classes.root}>
            <div className={classes.content}>
                {/* <Typography variant="h3">
                    THIS IS A SINGLE BOOK
                </Typography> */}
                {bookDetails?.image ? <img className={classes.image} src={bookDetails?.image} alt={bookDetails.title} /> : "no image availible"}
            </div>
        </Paper>
    );
}