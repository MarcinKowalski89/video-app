import React, { Component } from 'react';
import Pagination from './Pagination';

export default class Header extends Component {
  getEmptyResults() {
    return (
      <div className="alert alert-danger text-center">No results</div>
    )
  }
  getResults() {

    const { data: { items } } = this.props;

    return (
      <div>
        <ul className="list-group">
          {items.map((item, index) => <li className="list-group-item" key={index}>{item.snippet.title}</li>)}
        </ul>
        <Pagination onPageChange={this.props.handleOnPageChange.bind(this)} query={this.props.query} prevPageToken={this.props.data.prevPageToken} nextPageToken={this.props.data.nextPageToken} />
      </div>
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
