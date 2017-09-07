import React, { Component } from 'react';

export default class Header extends Component {
  getEmptyResults() {
    return (
      <div className="alert alert-danger text-center">No results</div>
    )
  }
  getResults() {

    const { data: { items } } = this.props;

    return (
      <ul className="list-group">
        {items.map((item) => <li className="list-group-item">{item.snippet.title}</li>)}
      </ul>
    )
  }
  render() {

    const { data } = this.props;

    return (
      <div className="col-md-10">
        {data && data.items.length ? this.getResults() : this.getEmptyResults()}
      </div>
    );
  }
}
