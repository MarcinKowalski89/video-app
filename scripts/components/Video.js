import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    return (
      <div className="list-group-item">
        <img src={this.props.item.snippet.thumbnails.default.url} />
        <span>{this.props.item.snippet.title}</span>
      </div>
    );
  }
}