import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removePhoto } from "../containers/actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 25,
    cursor: "pointer",
  },
  media: {
    height: 0,
    width: "auto",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

const PhotoCard = (props) => {
  const { history } = props;
  console.log(history);
  const classes = useStyles();
  const { photos } = props;

  const handleRemoveCard = (id) => {
    // console.log(props);
    const { dispatch } = props;
    dispatch(removePhoto(id));
  };
  
  return photos.length
    ? photos.map(({ id, name, file }) => (
        <Grid item xs={10} sm={4} key={id}>
          <Card className={classes.root} onClick={() => history.push(`/${id}`)}>
            <CardHeader
              action={
                <IconButton
                  aria-label="settings"
                  onClick={() => handleRemoveCard(id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              title={name}
            />
            <CardMedia className={classes.media} image={file} title="pic" />
          </Card>
        </Grid>
      ))
    : null;
  // }
};

export default connect(mapStateToProps)(PhotoCard);
