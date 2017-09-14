import React, { Component } from 'react';

export default class Header extends Component {

  onChange(e) {
    if ((e.key === 'Enter')&&(!!e.target.value)) {
      this.props.handleOnChangeTitle(e.target.value)
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <h1>{this.props.title}</h1>
        <input className="form-control" type="text" placeholder="Search video" onKeyPress={this.onChange.bind(this)}/>
      </div>
    );
  }
}
