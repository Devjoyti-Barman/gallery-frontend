import './App.css';
import Card from './components/card/card';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from './components/header/header';
import EditImage from './components/edit/editImage';
import ShowImage from './components/showImage/showImage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const [photo,setPhoto]=useState(null);

  // useEffect( () => {
  //   async function getImage(){
  //     try {
  //       const id="616ef43d69a06e93713efff7";
  //       const {data}=await axios.get(`http://localhost:5000/api/get-image/${id}`);
  //       setPhoto(data);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //   }
    

  //   getImage();
  // }, [])
  return (

    <Router>
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
                  <div>Upload Image</div>
              </Router>

              <Router path="/error">
                  <div>404 Page not found</div>
              </Router>
          </Switch>
            <header className="App-header">
              <Card/>
              {photo===null ? <div></div> : <img src={photo.data}/> }
              </header>
         </div>
    </Router>

  );
}

export default App;
