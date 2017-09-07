import React, { Component } from 'react';
import Header from './components/Header';
import ResultPage from './components/ResultPage';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default class App extends Component {

  componentWillMount() {
    this.setState({
      currentTitle: 'Video App',
      data: null
    });
  }

  handleChange(title) {
    this.fetchApi(title)
  }

  fetchApi(query) {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyBbZRcitpvM-KI35Xiw871sSTQ3gIlN6to`).then(
      (resp) => resp.json()
    ).then(
      (json) => {
        this.setState({
          data: json
        });
      }
    )
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header title={this.state.currentTitle} handleOnChangeTitle={this.handleChange.bind(this)} />
        </div>
        <div className="row">
          <ResultPage data={this.state.data}/>
          <Sidebar />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
