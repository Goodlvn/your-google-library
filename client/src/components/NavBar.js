import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Google Books
          </Typography>
          <Link to={"/"} style={{textDecoration: "none"}}>
            <Button style={{color: "white"}}>Search</Button>
          </Link>
          <Link to={"/saved"} style={{textDecoration: "none"}}>  
            <Button color="inherit" style={{color: "white"}}>Saved</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}