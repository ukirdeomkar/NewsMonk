
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress : 10
  }
  setProgress=(progress)=>{
    this.setState({progress: progress});
  }
  apiKey = process.env.REACT_APP_NEWS_API
  render() {
    return (
      <Router>

      <NavBar />  
      <LoadingBar
        color='violet'
        progress={this.state.progress}
        height={3}
      />
      {console.log(this.state.progress)}
      <Routes>
      <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={9} country="in" category="general"/>} />
      <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business"pageSize={9} country="in" category="business"/>} />
      <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={9} country="in" category="entertainment"/>} />
      <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={9} country="in" category="health"/>} />
      <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={9} country="in" category="science"/>} />
      <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={9} country="in" category="sports"/>} />
      <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={9} country="in" category="technology"/>} />
      </Routes> 
      
      </Router>
    )
  }
}

