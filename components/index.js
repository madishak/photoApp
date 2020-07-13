import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      file: null,
    };
    this.fileInput = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const files = Object.values(this.fileInput.current.files).map((file) =>
      URL.createObjectURL(file)
    );
    this.setState({ images: [...files] });

    console.log(files);
  };

  // handleChange = (e) => {
  //     e.preventDefault();
  //     const file = URL.createObjectURL(this.fileInput.current.files[0]);
  //     this.setState({file})
  //     console.log('File', file)
  // }
  createImg = (key, file) => <img key={key} alt={key} src={file} />;
  render() {
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
        {this.state.images.map((file, i) => this.createImg(i, file))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
console.log("Hello, Madina!");
