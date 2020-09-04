import React, { useRef } from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { addPhotos } from "../containers/actions/index";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 20,
  },
  input: {
    color: "transparent",
  }
}));

const mapStateToProps = (state) => {
  console.log("State", state.photos);
  return {
    photos: state.photos,
  };
};

const Form = (props) => {
  const classes = useStyles();
  const fileInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = props;

    const files = Object.values(fileInput.current.files).map((file) => ({
      id: uniqueId(),
      name: file.name.slice(0, 10).split(".")[0],
      file: URL.createObjectURL(file),
    }));
    console.log("files", files);
    dispatch(addPhotos(files));
  };

  return (
    <div>
      <form className={classes.root} onSubmit={handleSubmit}>
        
        <input
          accept="image/*"
          className={classes.input}
          type="file"
          multiple
          ref={fileInput}
        />

        <Button
          className="form__button"
          type="submit"
          variant="contained"
          color="primary"
        >
          OK
        </Button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps)(Form);
