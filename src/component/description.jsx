import React, { Component } from 'react';

class Description extends Component {
  render() {
    return <p className='font-serif'>{this.props.text}</p>;
  }
}

export default Description;
