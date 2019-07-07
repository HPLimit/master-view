import express from 'express';
const server = express();
import {readFileSync} from'fs';
import React from 'react';
import {renderToString} from 'react-dom/server';
import app from './app';
import {StaticRouter} from 'react-router-dom';

server.use("/static", express.static("./dist/static"));
server.get('*', async (req, res)=>{
    let html = readFileSync("./dist/index.html",  'utf8');

    let App = await app();

    let context = {};

    html = html.replace("{head}", "").replace("{body}", renderToString(<StaticRouter location={req.url} context={context}><App/></StaticRouter>))

    res.send(html).end();

}).listen(8080, ()=> console.log("server running in http://localhost:8080"));
