import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity < 0.2 ? null : <ColorBox opacity={preciseMinusTenth(this.props.opacity)}/>}
      </div>
    )
  }

}
function strip(number,precision) {
  return (parseFloat(number).toPrecision(precision));
}
function preciseMinusTenth(number)
{
  const cf = 10; //correction factor
  return ((number * cf) - (0.1 * cf))/cf
}

