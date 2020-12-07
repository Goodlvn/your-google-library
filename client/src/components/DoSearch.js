import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';
import { useBookContext } from '../utils/BookContext';
import Actions from "../utils/Actions";
import API from "../utils/API";

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
  const { dispatch } = useBookContext();
  const [title, setTitle] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    setTitle(value);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await API.searchTitle(title);
    let bookResults;

    if (data) {
      bookResults = data.map(results => {
        let obj = { bookID: results.id }
        const { volumeInfo } = results;
        obj = { ...obj, ...volumeInfo }
        return obj;
      })
      dispatch({ type: Actions.SEARCH_RESULTS, payload: bookResults });
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Grid container style={{ margin: "0 auto" }}>
        <Grid item xs={12}>
          <TextField id="filled-basic" label="Book" variant="filled" onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Button
            style={{ marginTop: "15px" }}
            disabled={title.trim().length === 0}
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



