import React, { Component } from "react";
import ReactDom from "react-dom";
import Char from "./char";
import Image from "./image";

class App extends Component {
  state = {
    data: [],
    ren: false,
  };

  componentDidMount() {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((e) =>
        this.setState({
          data: e,
          ren:true
        })
      )
      .catch((e) => console.log(e));
  }
  a=()=>{
    return this.state.data.length > 0 && this.state.ren
        ? this.state.data.map((e,i) => <div key={i}>{e.name}</div>)
        : "Loading"
  }
  

  render() {
    return (
   
      <div>
        {/* <button onClick={this.a}>Click</button> */}
        <Char data={this.state.data}/>
      </div>
    );
  }
}

export default App;

ReactDom.render(<App />, document.querySelector("#root"));
