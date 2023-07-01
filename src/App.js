
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  // state = {
  //   progress : 10
  // }
  const [progressState, setprogressState] = useState(10)
  const setProgress=(progress)=>{
    // setState({progress: progress});
    setprogressState(progress);
  }
  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <Router>

      <NavBar />  
      <LoadingBar
        color='violet'
        progress={progressState}
        height={3}
      />

      <Routes>
      <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={9} country="in" category="general"/>} />
      <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business"pageSize={9} country="in" category="business"/>} />
      <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={9} country="in" category="entertainment"/>} />
      <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={9} country="in" category="health"/>} />
      <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={9} country="in" category="science"/>} />
      <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={9} country="in" category="sports"/>} />
      <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={9} country="in" category="technology"/>} />
      </Routes> 
      
      </Router>
    )
  
}

export default App;