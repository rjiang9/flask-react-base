import { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState()

  useEffect(
    () => {
      getData()
    }, [])

  function getData() {
    axios({
      method: "GET",
      url: '/profile'
    })
      .then((response) => {
        const res = response.data
        setProfileData(
          { 
            profile_name: res.name,
            profile_aboutme: res.about_me
          }
        )
      })
      .catch((error) => {
        if(error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    <p> To get your profile details:</p>
    <button onClick={getData}>click</button>

    {profileData &&
      <div>
        <p>Profile Name: {profileData.profile_name}</p>
        <p>Profile About: {profileData.profile_aboutme}</p>
      </div>
    }

      </header>
    </div>
  );
}

export default App;
