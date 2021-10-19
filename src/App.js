import './App.css';
import Card from './components/card/card';
import axios from 'axios';
import {useEffect, useState} from 'react';
import logo from './logo512.png';

function App() {
  
  const [photo,setPhoto]=useState(null);

  useEffect( () => {
    async function getImage(){
      try {
        const id="616ef43d69a06e93713efff7";
        const {data}=await axios.get(`http://localhost:5000/api/get-image/${id}`);
        setPhoto(data);
      } catch (error) {
        console.log(error);
      }

    }
    

    getImage();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
          <Card/>
          {photo===null ? <div></div> : <img src={photo.data}/> }
      </header>
    </div>
  );
}

export default App;
