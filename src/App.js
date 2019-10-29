import React, { useState, useEffect }from "react";
import "./App.css";
import axios from 'axios';



function App() {
  
  const [photo, setPhoto] = useState('')
  console.log(`Photo: ${photo}`)

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=6FjJUz3MqO15yZ0pVuxG8P3rs5mhdnFMjMf2tgHA')
      .then(response => {
        console.log(`Response: ${JSON.stringify(response.data.hdurl)}`)
        setPhoto(response.data.hdurl)
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      })
  }, [])


  return (
    <div className="App">


      <h2 className='title'>NASA Astronomy Photo Of the Day</h2>
      <img className='pika' src='https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png' alt='Shocked Pikachu'/>
      <img className='photo' src={photo} alt="pretty space stuff"/>
    </div>
  );
}

export default App;
