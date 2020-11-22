import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '33ch',
    },
  },
}));

export default function DoSearch() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container style={{margin: "0 auto"}}>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Book" variant="filled" />
        </Grid>
        <Grid item xs={12}>
          <Button
            style={{marginTop: "15px"}}
            // disabled={title.trim().length === 0}
            type="submit"
            variant="contained"
            className={classes.button}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}



