import React from "react";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Header from "./Header";
import Form from "./Form";
import PhotoCard from "./PhotoCard";
import PhotosLoaderButton from "./PhotosLoaderButton";

const useStyles = makeStyles({
  photoCardsWrapper: {
    margin: "0 auto",
  },
  text: {
    textAlign: "center",
    marginTop: 15,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Typography display="block" className={classes.text}>Load photos yourself!</Typography>
      <Typography display="block" className={classes.text}>Or just load from the Internet by clicking pink button.</Typography>

      <Grid container justify="center" item xs={12}>
        <Form />
        <PhotosLoaderButton />
      </Grid>

      <Grid
        container
        justify="center"
        spacing={10}
        className={classes.photoCardsWrapper}
      >
        <PhotoCard />
      </Grid>
    </div>
  );
};

export default Home;
