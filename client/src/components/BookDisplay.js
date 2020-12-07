import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, withTheme } from '@material-ui/core';
import SavedButton from "./SavedButton";
import API from "../utils/API";
import { useBookContext } from "../utils/BookContext";
import Actions from "../utils/Actions";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        minHeight: "50px",
        width: "90%",
        margin: "0 auto",
        marginTop: "50px",
        backgroundColor: "#818B94",
        marginBottom: "75px",
        padding: "20px",
        position: "relative"
    },
    content: {
        display: "flex",
        color: "white"
    },
    label: {
        margin: 0,
        paddingTop: "15px",
        paddingLeft: "15px",
    },
    saved: {
        float: "right"
    }
}));

export default function BookDisplay({ image, title, authors, description, link, bookID, split }) {
    const classes = useStyles();
    const { dispatch } = useBookContext();

    let authorsString;

    if (authors) {
        authors.forEach((author, index) => {

            index === 0 ? authorsString = author :
                authorsString += ", " + author
        })
    }

    async function saveBook(e) {

        let addBook = {
            bookID,
            title,
            authors,
            description,
            image,
            link
        }

        const { data } = await API.saveBook(addBook);

        if (data) {
            dispatch({ type: Actions.SAVE_BOOK, payload: data })
        }
    }

    return (

        <Paper elevation={3} className={classes.root}>
            <SavedButton className={classes.saved} onClick={saveBook} split={split} />
            <div className={classes.content}>
                {image ? <img style={{ minHeight: "198px", minWidth: "128px" }} src={image} alt="book cover" /> : <img src="https://via.placeholder.com/150" alt="book cover" />}
                <div style={{ marginLeft: "15px" }}>
                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="h5" component="h2" style={{ marginLeft: "15px", marginRight: "15px" }} >
                            •
                         </Typography>
                        <Typography style={{ fontStyle: "italic" }} >
                            {authorsString === undefined ? "No Author Information is available" : authorsString}
                        </Typography>
                    </div>


                    <Typography>
                        {description ? description.slice(0, 250).concat('...') : "no description available"}
                    </Typography>

                </div>
            </div>
        </Paper >
    );
}