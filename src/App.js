import React, { useState, useEffect }from "react";
import "./App.css";
import axios from 'axios';
import Styled from 'styled-components';
import DateGenerator from 'random-date-generator';

const Page = Styled.div`
text-shadow: 0 0 2px #fff,
1px 1px 2px #fff,
0 1px 2px #fff,
1px 0 2px #fff;
`
const Pika = Styled.img`
position: absolute;
top: 0;
left: 0;
z-index: 2;
opacity: .1;
height: 100vh;
width: 100vw;
`
const APOD = Styled.img`
position: absolute;
top: 0;
left: 0;
z-index: -1;
height: 100vh;
width: 100vw;

`

function App() {
  
  const [photo, setPhoto] = useState('')
  console.log(`Photo: ${photo}`)

  
  useEffect(() => {
    const date = () => {

    const utc = new Date().toJSON().slice(0,10);
    // document.write(utc);
    console.log(`UTC: ${utc}`)

    const startDate = new Date(2006, 7, 4);
    const endDate = new Date(2019, 10, 30);

    let randomDate = DateGenerator.getRandomDateInRange(startDate, endDate)
    
    return(randomDate.toJSON().slice(0,10))
    }

    

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=6FjJUz3MqO15yZ0pVuxG8P3rs5mhdnFMjMf2tgHA&date=${date()}`)
      .then(response => {
        console.log(`Response URL: ${JSON.stringify(response.data.hdurl)}`)
        console.log(`Response: ${JSON.stringify(response.data)}`)
        setPhoto(response.data.hdurl)
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      })
  }, [])


  return (
    <div className="App">
      <Page>
        <h2 className='title'>codeasaglacier's 'NASA Astronomy Photo Of the Day</h2>
        <Pika src='https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png' alt='Shocked Pikachu'/>
        <APOD src={photo} alt="pretty space stuff"/>
      </Page>
    </div>
  );
}

export default App;
