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
      currentTitle: 'Video App',
      data: null
    });
  }

  handleChange(query) {
    fetchBy('query', { query } , this.setState.bind(this))
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
          <Header title={this.state.currentTitle} handleOnChangeTitle={this.handleChange.bind(this)} />
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
