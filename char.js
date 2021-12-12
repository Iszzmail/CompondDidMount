import React, { Component } from "react";
import "./style.css";
import Image from "./image";

class Char extends Component {
  state = {
    showImage: true,
    name: "",
    back: true,
  };

  a = (i) => {
    this.props.data.filter((e) => {
      if (e.name === i.target.innerText) {
        this.setState({ name: e.img });
      }
      this.setState({ showImage: false });
      return true;
    });
  };

  back = () => {
    this.setState({ back: true })
    this.setState({showImage:true})
    console.log(this.state.showImage)
  };

  render() {
    console.log("show image: " + this.state.showImage);
    console.log("back: " + this.state.back);
    return (
      <div>
        <div>
          {(this.props.data.length > 0 && this.state.showImage) &&
          this.state.back ? (
            this.props.data.map((e, i) => (
              <div className="rcorners1">
                <label onClick={this.a.bind(i)}>{e.name}</label>
              </div>
            ))
          ) : (
            <div>
              <button onClick={this.back}>Back</button>
              <Image key={Math.random()} src={this.state.name} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Char;
