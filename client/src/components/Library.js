import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, withTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "350px",
        width: "75%",
        margin: "0 auto",
        marginTop: "50px",
        backgroundColor: "#3f51b5",
        marginBottom: "75px"
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
    const classes = useStyles();

    return (

        <Paper elevation={3} className={classes.root}>
            <div className={classes.content}>
                <Typography>
                    <h3 className={classes.label}>Saved Books</h3>
                </Typography>
            </div>
        </Paper>
    );
}