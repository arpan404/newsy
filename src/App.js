import React, { Component } from 'react';
import NavBar from './components/navBar';
import News from './components/news';
import { Route, Routes,BrowserRouter as Router} from 'react-router-dom'
import Search from './components/search';
import LoadingBar from 'react-top-loading-bar';
import Page404 from './components/page404';


export default class App extends Component{
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  };
  setProgress= (progress)=>{
    this.setState( 
      {
        progress: progress
      }
    )
  };
  render(){
    return(
      <>
      <Router>
      
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        style = {{height: '2px'}}
      
      />
      <NavBar/>
      <Routes>
        <Route exact strict path = "/" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key = "home" type = "home"/>} />
        {/* <Route exact path="/search/" element={<Search setProgress = {this.setProgress} apiKey= {this.apiKey} key = "search"/>}/> */}
        <Route exact strict path = "business" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key ="business" category ="business"/>} />
        <Route exact strict path = "entertainment" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key ="entertainment" category ="entertainment"/>} />
        <Route exact strict path = "general" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key ="general" category ="general"/>} />
        <Route exact strict path = "health" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key ="health" category ="health"/>} />
        <Route exact strict path = "science" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key ="science" category ="science"/>} />
        <Route exact strict path = "sport" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key ="sport" category ="sport"/>} />
        <Route exact strict path = "technology" element ={<News setProgress = {this.setProgress} apiKey= {this.apiKey} key ="technology" category ="technology"/>} />
        {/* <Route exact strict path="/search/:query" element={<Search setProgress = {this.setProgress} apiKey= {this.apiKey} key= "search"/>}/> */}

        <Route path="*" element={<Page404/>} />
      </Routes>
      </Router>
      </>
    );
  }
}