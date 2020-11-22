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
                <Typography variant="h3">
                    Google Book Search
                </Typography>
                <Typography variant="h5" style={{margin: 10}}>
                    search for and save books of interest
                </Typography>
                <DoSearch />
            </div>
        </Paper>
    );
}