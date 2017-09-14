import React, { Component } from 'react';
import Pagination from './Pagination';
import config from '../config';
import Video from './Video';
import Playlist from './Playlist';
import Channel from './Channel';


export default class Header extends Component {
  getEmptyResults() {
    return (
      <div className="alert alert-danger text-center">No results</div>
    )
  }
  getItemType(item) {
    return item.id.kind.split('#')[1];
  }
  getViewByType(item) {
    switch (this.getItemType(item)) {
      case 'video':
        return <Video item={item} />
        break;
      case 'playlist':
        return <Playlist item={item} />
        break;
      case 'channel':
        return <Channel item={item} />
        break;
    }
  }
  sortBy(name, item) {
    return this.getItemType(item) === name ? -1 : 1;
  }
  getResults() {

    const { data: { items } } = this.props;

    return (
      <div>
        <ul className="list-group">
          {items.sort(this.sortBy.bind(this,'channel')).map((item, index) => this.getViewByType(item))}
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
