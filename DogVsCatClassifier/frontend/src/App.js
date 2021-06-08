import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { apiUrl } from "./config";
const header = new Headers();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      animal: "",
      confidence: "",
    };
  }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  fileUploadHandler = () => {
    header.append("Access-Control-Allow-Origin", "*");
    header.append("Access-Control-Allow-Credentials", "true");
    var fd = new FormData();
    fd.append("image", this.state.selectedFile, header);
    axios.post(apiUrl, fd).then((res) => {
      this.setState({
        animal: res.data["label"],
      });
      return res;
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Dog v/s Cat Image classifier</h1>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Run Model</button>
        {/* <button onClick={this.fileUploadHandler}>Take a photo</button> */}
        <div className="predictions">
          <ul className="list">
            <li>Animal : {this.state.animal} </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
