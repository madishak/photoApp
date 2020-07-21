import React, { Component } from "react";
import { connect } from "react-redux";
import { uniqueId } from "lodash";
import { addPhotos, removePhoto } from "./actions/index";

const mapStateToProps = (state) => {
  console.log("State", state.photos);
  return {
    photos: state.photos,
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const files = Object.values(
      this.fileInput.current.files
    ).map((file, ind) => ({ id: uniqueId(), file: URL.createObjectURL(file) }));
    dispatch(addPhotos(files));
    console.log("Files", files);
  };

  createImg = (key, file) => <img key={key} alt={key} src={file} />;

  render() {
    const { photos } = this.props;

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="form__input"
            type="file"
            multiple
            ref={this.fileInput}
          />
          <button className="form__button" type="submit">
            OK
          </button>
        </form>
        {photos.length
          ? photos.map(({ id, file }) => this.createImg(id, file))
          : null}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
