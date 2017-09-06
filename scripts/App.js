import React, { Component } from 'react';
import Header from './components/Header';
import ResultPage from './components/ResultPage';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header title="Video App"/>
        </div>
        <div className="row">
          <ResultPage />
          <Sidebar />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
