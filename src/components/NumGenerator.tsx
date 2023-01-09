import React, { Component } from 'react';

type numProps = {
  num:number,
  generator: ()=> void
}

export class NumGenerator extends Component<numProps> {
  componentDidUpdate(){
    if (this.props.num < 5) {
      throw new Error("Number is less than 5");
    }
  }

  render() {
    return (
    <div>
      <label>{this.props.num}</label><br/>
      <button onClick={this.props.generator}>Number Generator</button>
    </div>
    )
  }
}

export default NumGenerator