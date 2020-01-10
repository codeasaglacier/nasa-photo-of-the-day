import React, { useState, useEffect }from "react";
import "./App.css";
import axios from 'axios';
import Styled from 'styled-components';
import DateGenerator from 'random-date-generator';

const Page = Styled.div`
background: none;
`

// const Title = Styled.div`
// background: rgba(0, 0, 0, 0.0);
// `
// text-shadow: 0 0 2px #fff,
// 1px 1px 2px #fff,
// 0 1px 2px #fff,
// 1px 0 2px #fff;

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
const About = Styled.div`
position: fixed;
bottom: 0;
display: flex;
justify-content: center;
flex-direction: column;
color: white;
text-shadow: -1px -1px 2px #000,
1px 1px 2px #000,
1px -1px 2px #000,
-1px 1px 2px #000;
`


function App() {
  
  const [ photo, setPhoto ] = useState('')
  // console.log( `Photo: ${photo}` )

  const [ about, setAbout ] = useState('')
  // console.log( `About: ${about} `)

  const [ date, setDate ] = useState('')
  // console.log( `Date: ${date}`)
  
  useEffect(() => {
    const date = () => {

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
        setDate(response.data.date)
        setAbout(response.data.explanation)
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      })
  }, [])


  return (
    <div className="App">
      <Page>
        <div className = 'title'>
         <h2>codeasaglacier's NASA Astronomy Photo Of the Day</h2>
        </div>
        <Pika src='https://i.kym-cdn.com/photos/images/original/001/431/201/40f.png' alt='Shocked Pikachu'/>
        <APOD src={photo} alt="pretty space stuff"/>
        <About>
          <p>{date}</p>
          <p>{about}</p>
        </About>
      </Page>
    </div>
  );
}

export default App;
