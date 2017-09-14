import React, { Component } from 'react';

export default class Pagination extends Component {

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item${!this.props.prevPageToken && ' disabled'}`}>
            <a className="page-link" onClick={this.props.onPageChange.bind(this, this.props.prevPageToken)} href="#">Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={this.props.onPageChange.bind(this, this.props.nextPageToken)} href="#">Next</a>
          </li>
        </ul>
      </nav>
    );
  }
}
