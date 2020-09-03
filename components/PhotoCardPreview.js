import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Header from './Header';

const mapStateToProps = (state) => {
  console.log(state.photos.filter(({ id, name, file, description }) => id === state.currentId))
  return {
    currentId: state.currentId,
    photo: state.photos.filter(({ id, name, file, description }) => id === state.currentId),
  };
};

const PhotoCardPreview = (props) => {
  const history = useHistory();
  const { currentId, photo } = props;
  // const 
  const [{ id, name, file, description }] = photo;
  console.log("IDDDD", currentId, id, name, file, description);
return (
<div>
 <Header />

  Hello {currentId}
  {name}
  {description}
  
  </div>);
};

export default connect(mapStateToProps)(PhotoCardPreview);
