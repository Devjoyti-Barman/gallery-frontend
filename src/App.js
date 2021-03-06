import './App.css';
import Card from './components/card/card';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { createBrowserHistory } from "history";
import Header from './components/header/header';
import EditImage from './components/edit/editImage';
import ShowImage from './components/showImage/showImage';
import Upload from './components/upload/upload';
import Home from './components/home/home';
import Error from './components/error/error';
import Search from './components/search/search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const history = createBrowserHistory();
function App() {
  
  return (

    <Router  forceRefresh={true} history={history}>
        <div className="App">
          <Header/>
          <Switch>
              <Router path="/edit/:id">
                  <EditImage/>
              </Router>
              <Router path="/details/:id">
                  <div>Details</div>
              </Router>
              <Router path="/show/:id">
                  <ShowImage/>
              </Router>

              <Router path="/upload-image">
                   <Upload/>
              </Router>
              <Router path="/page/:id">  
                 <Home/>
              </Router>
              <Router path="/search/:q">
                  <Search/>
              </Router>
              <Router path="/error">
                  <Error/>
              </Router>

              <Redirect to="/page/1" />
          </Switch>
      
         </div>
    </Router>

  );
}

export default App;
