import React from 'react'
import {hydrate} from 'react-dom'
import app from '../app'
import {BrowserRouter} from 'react-router-dom';

(async ()=>{
    let App = await app();

    hydrate(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"))
})()