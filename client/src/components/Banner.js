import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, withTheme } from '@material-ui/core';
import DoSearch from './DoSearch';

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
        paddingTop: "55px",
        textAlign: "center",
        color: "white"
    }
}));

export default function Banner() {
    const classes = useStyles();

    return (

        <Paper elevation={3} className={classes.root}>
            <div className={classes.content}>
                <Typography>
                    <h1>Google Book Search</h1>
                </Typography>
                <Typography>
                    <h3>search for and save books of interest</h3>
                </Typography>
                <DoSearch/>
            </div>
        </Paper>
    );
}