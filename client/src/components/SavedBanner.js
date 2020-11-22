import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, withTheme } from '@material-ui/core';

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
        paddingTop: "125px",
        textAlign: "center",
        color: "white"
    }
}));

export default function SavedBanner() {
    const classes = useStyles();

    return (

        <Paper elevation={3} className={classes.root}>
            <div className={classes.content}>
                <Typography>
                    <h1>Your Own Google Library</h1>
                </Typography>
            </div>
        </Paper>
    );
}