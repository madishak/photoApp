import React, { Component } from "react";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Form from "./Form";
import PhotoCard from "./PhotoCard";


class App extends Component {


  render() {

    return (
      <div>
        <Header />

        <Grid container justify="center" item  xs={12}>
        <Form />
        </Grid>

          <Grid container  justify="center" item spacing={2}>
      <PhotoCard />
        </Grid>
      </div>
    );
  }
}

export default App;
