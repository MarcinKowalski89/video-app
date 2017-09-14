import React, { Component } from 'react';

export default class Channel extends Component {
  render() {
    return (
      <div className="list-group-item">
        <img style={
          { borderRadius: '50%' }
        } src={this.props.item.snippet.thumbnails.default.url} />
        <span>{this.props.item.snippet.title}</span>
      </div>
    );
  }
}