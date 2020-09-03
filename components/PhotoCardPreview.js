import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    currentId: state.currentId,
  };
};

const PhotoCardPreview = (props) => {
  const history = useHistory();
  const { currentId } = props;
  console.log("IDDDD", currentId);
return (<div>Hello {currentId}</div>);
};

export default connect(mapStateToProps)(PhotoCardPreview);
