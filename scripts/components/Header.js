import React, { Component } from 'react';

export default class Header extends Component {

  onChange(title) {
    this.setState({
      title
    });
  }

  render() {
    return (
      <div className="col-md-12">
        <h1>{this.props.title}</h1>
        <input className="form-control" type="text" placeholder="Search video"/>
      </div>
    );
  }
}
