import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, withTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "auto",
        minHeight: "50px",
        width: "90%",
        margin: "0 auto",
        marginTop: "50px",
        backgroundColor: "#818B94",
        marginBottom: "75px",
        padding: "20px"
    },
    content: {
        display: "flex",
        color: "white"
    },
    label: {
        margin: 0,
        paddingTop: "15px",
        paddingLeft: "15px",
    }
}));

export default function BookDisplay({ image, title, description }) {
    const classes = useStyles();

    return (

        <Paper elevation={3} className={classes.root}>
            <div className={classes.content}>
                {image ? <img src={image} alt="book cover" /> : <img src="https://via.placeholder.com/150" alt="book cover" />}
                <div>
                    <Typography>
                        {title}
                    </Typography>

                    <Typography>
                        {description ? description.slice(0, 250).concat('...') : "no description availible"}
                    </Typography>

                </div>
            </div>
        </Paper>
    );
}