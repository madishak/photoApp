import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {  PHOTOS_FETCH_REQUEST } from '../constants';

const useStyles = makeStyles(() => ({
  root: {
    margin: 20,
  },
}));

const mapStateToProps = state => {
  return {
    photos: state.photos,
  };
};

const PhotoLoaderButton = (props) => {
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();
    const { dispatch } = props;
    dispatch({ type: PHOTOS_FETCH_REQUEST });
  };

  return (
    <Button
      onClick={handleClick}
      className={classes.root}
      type="submit"
      variant="contained"
      color="secondary"
    >
      Get photos from the Internet
    </Button>
  );
};

export default connect(mapStateToProps)(PhotoLoaderButton);
