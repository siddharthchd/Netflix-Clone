import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'

function App() {
    return ( 
        <div className = "App" >
        <Row title = "NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals}/>
        <Row title = "Trending Now" fetchurl={requests.fetchTrending}/>
        </div>
    );
}

export default App;