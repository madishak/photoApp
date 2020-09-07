import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  image: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
    maxWidth: 345,
    height: 'auto',
    borderRadius: 5,
    boxShadow: '0 0 5px #616161',
  },
  title: {
    textAlign: "center",
    marginTop: 20,
  },
  caption: {
    textAlign: "center",
  },
  backButton: {
    margin: '0 auto',
    display: 'flex',
    marginTop: 10,
  }
});


const mapStateToProps = (state) => {
  return {
    photo: state.photos.filter(({ id }) => id === state.currentId),
  };
};

const PhotoCardView = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { photo } = props;
  const [{ name, file, description }] = photo;
  
  const handleClick = () => history.push('/');
  return (
    <div>
      <Header />
      <img src={file} className={classes.image} />
      <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
        {name}
      </Typography>
      <Typography variant="subtitle1" component="p" className={classes.caption}>
        {description}
      </Typography>
      <Button type="button" variant="contained" color="secondary" onClick={handleClick}  className={classes.backButton}>GO BACK</Button>
    </div>);
};

export default connect(mapStateToProps)(PhotoCardView);
