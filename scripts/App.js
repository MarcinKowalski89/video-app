import React, { Component } from 'react';
import config from './config';
import { fetchBy } from './helpers';
import Header from './components/Header';
import ResultPage from './components/ResultPage';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default class App extends Component {

  componentWillMount() {
    fetchBy();
    this.setState({
      currentTitle: config.TITLE,
      data: null
    });
  }

  handleChange(query) {
    fetchBy('query', { query } , this.setState.bind(this))
  }

  getTitle() {
    return this.state.query ? 'Searching results for: ' + this.state.query : this.state.currentTitle
  }

  handleChangePage(pageToken) {
    fetchBy('pageToken', {
      query: this.state.query,
      pageToken
    }, this.setState.bind(this))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header title={this.getTitle()} handleOnChangeTitle={this.handleChange.bind(this)} />
        </div>
        <div className="row">
          <ResultPage query={this.state.query} data={this.state.data} handleOnPageChange={this.handleChangePage.bind(this)}/>
          <Sidebar />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
