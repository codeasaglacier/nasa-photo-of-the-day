import React, { useState, useEffect }from "react";
import "./App.css";
import axios from 'axios';



function App() {

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=6FjJUz3MqO15yZ0pVuxG8P3rs5mhdnFMjMf2tgHA')
      .then(response => {
        console.log(`Response: ${response.data}`)
        
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      })
  }, [])

  const [photo, setPhoto] = useState([])
  console.log(`Photo: ${photo}`)

  return (
    <div className="App">


      <h2 className='title'>NASA Astronomy Photo Of the Day</h2>
      
    </div>
  );
}

export default App;
